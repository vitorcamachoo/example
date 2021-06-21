import useSWR from 'swr'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useAtomValue } from 'jotai/utils'

import { getPosts, Post as PostType } from 'utils/api'
import { filterPosts } from 'utils/filter'
import searchAtom from 'atoms/search'

import Container from 'components/layout/Container/Container'
import InputSearch from 'components/form/InputSearch'
import Pagination from 'components/ui/Pagination/Pagination'

import Posts from 'components/lists/posts/Posts/Posts'
import PostsFilter from 'components/lists/posts/PostsFilter/PostsFilter'
import NotFoundSearch from 'components/lists/posts/NotFoundSearch/NotFoundSearch'

import classes from './index.module.scss'

const PAGE_SIZE = 10

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [page, setPage] = useState(0)
  const { title, category } = useAtomValue(searchAtom)
  const { data: posts, error } = useSWR('posts', getPosts, {
    initialData: props.posts as PostType[],
  })
  const isLoading = !posts && !error

  const filterData = useMemo(() => {
    if (posts) {
      const categoryFiltered = category !== 'All' ? filterPosts(posts, category, 'category') : posts
      const titleFiltered = filterPosts(categoryFiltered, title, 'title')

      return titleFiltered
    }

    return posts
  }, [posts, title, category])

  const { data: pageData } = useSWR(
    posts ? ['paginated-posts', page + 1, filterData] : null,
    (_, offset, data: typeof posts) => data?.slice(offset * PAGE_SIZE - PAGE_SIZE, offset * PAGE_SIZE),
  )

  // Reset page when search or filter by category
  useEffect(() => setPage(0), [title, category])

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <InputSearch placeholder="Type to search" />
        <div className={clsx('row')}>
          <div className={clsx('xs-col-12', 'lg-col-2')}>
            <PostsFilter />
          </div>
          <div className={clsx('xs-col-12', 'lg-col-10')}>
            {isLoading ? (
              <> Loading...</>
            ) : error || filterData?.length === 0 ? (
              <NotFoundSearch />
            ) : (
              <Posts posts={pageData} total={filterData?.length} />
            )}
          </div>
        </div>
        {filterData?.length && filterData?.length > PAGE_SIZE ? (
          <div className={classes.pagination}>
            <Pagination
              initialPage={page}
              pageCount={Math.floor(filterData?.length / PAGE_SIZE)}
              onPageChange={(nextPage) => setPage(nextPage)}
            />
          </div>
        ) : null}
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

export default Home
