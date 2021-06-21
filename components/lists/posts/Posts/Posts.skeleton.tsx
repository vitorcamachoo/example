import { FC } from 'react'
import classes from './Posts.module.scss'

const Skeleton: FC = () => {
  const posts = new Array(10).fill(null)

  return (
    <div className={classes.root}>
      {posts?.map((_, index) => (
        <div key={`skeleton-post-${index}`} className={classes.skeleton} />
      ))}
    </div>
  )
}

export default Skeleton
