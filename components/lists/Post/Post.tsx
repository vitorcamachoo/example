import { FC } from 'react'
import { Post as PostApi } from 'utils/api'
import { format } from 'date-fns'
import Typography from 'components/ui/Typography/Typography'
import classes from './Post.module.scss'
import Link from 'next/link'

const Post: FC<PostApi> = (props) => {
  return (
    <Link href={`https://www.talkdesk.com${props.url}`}>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant="subtitle2" color="primary">
            {props.category}
          </Typography>
          <Typography variant="subtitle2">{format(new Date(props.date), 'MMM dd, yyyy')}</Typography>
        </div>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {props.url}
        </Typography>
      </div>
    </Link>
  )
}

export default Post
