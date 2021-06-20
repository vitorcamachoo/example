import useSWR from 'swr'
import { useEffect, useMemo, useState } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useAtomValue } from 'jotai/utils'

import { getPosts, Post as PostType } from 'utils/api'
import { filterPosts } from 'utils/filter'
import searchAtom from 'atoms/search'

import Container from 'components/layout/Container/Container'
import InputSearch from 'components/form/InputSearch'
import Pagination from 'components/ui/Pagination/Pagination'

import Post from 'components/lists/Post/Post'
import PostsFilter from 'components/lists/PostsFilter/PostsFilter'
import NotFoundSearch from 'components/notFound/NotFoundSearch'

import classes from './index.module.scss'

const PAGE_SIZE = 10

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [page, setPage] = useState(0)
  const { title, category } = useAtomValue(searchAtom)
  const { data: posts, error } = useSWR('posts', getPosts, { initialData: props.posts as PostType[] })
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
    <Container>
      <InputSearch placeholder="Type to search" />
      <PostsFilter />
      <div className={classes.content}>
        <div className={classes.menu}>Menu!!</div>
        <div className={classes.list}>
          {isLoading ? (
            <> Loading...</>
          ) : error ? (
            <NotFoundSearch />
          ) : (
            pageData?.map((post) => (
              <div key={post.id}>
                <Post key={post.id} {...post} />
              </div>
            ))
          )}
        </div>
      </div>
      {filterData?.length && filterData?.length > PAGE_SIZE ? (
        <Pagination
          initialPage={page}
          pageCount={Math.floor(filterData?.length / PAGE_SIZE)}
          onPageChange={(nextPage) => setPage(nextPage)}
        />
      ) : null}
    </Container>
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
