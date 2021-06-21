import { FC } from 'react'
import { Post as PostApi } from 'utils/api'
import { format } from 'date-fns'
import Typography from 'components/ui/Typography/Typography'
import classes from './Posts.module.scss'

export interface PostsProps {
  posts?: PostApi[]
  total?: number
}

const Post: FC<PostsProps> = ({ posts, total }) => {
  return (
    <div className={classes.root}>
      {total && <Typography variant="body2">Showing {total} results for "talkdesk"</Typography>}

      {posts?.map((post) => (
        <a target={post.target} href={`https://www.talkdesk.com${post.url}`} rel="noopener noreferrer">
          <div className={classes.post}>
            <div className={classes.header}>
              <Typography variant="subtitle2" color="primary">
                {post.category}
              </Typography>
              <Typography variant="subtitle2">{format(new Date(post.date), 'MMM dd, yyyy')}</Typography>
            </div>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {post.url}
            </Typography>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Post
