import { FC } from 'react'
import Image from 'next/image'
import Typography from 'components/ui/Typography/Typography'

const NotFoundSearch: FC = () => {
  return (
    <div className="row">
      <div className="xs-col-12 lg-col-6 mb-4">
        <Typography variant="h2">Haven't found what you are looking for?</Typography>
        <Typography variant="body1">Please give it another try!</Typography>
      </div>
      <div className="xs-col-12 lg-col-6 mb-1">
        <Image layout="responsive" height="600" width="1200" src="/images/empty-state.png" />
      </div>
    </div>
  )
}

export default NotFoundSearch
