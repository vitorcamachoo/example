import { FC } from 'react'
import Image from 'next/image'
import classes from './NotFoundSearch.module.scss'

const NotFoundSearch: FC = () => {
  return (
    <div className={classes.root}>
      <Image
        layout="fill"
        src="https://infra-cloudfront-talkdeskcom.talkdesk.com/talkdesk_com/2021/03/24050105/empty-state-c.png"
      />
    </div>
  )
}

export default NotFoundSearch
