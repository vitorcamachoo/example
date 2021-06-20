import { FC } from 'react'
import classes from './Container.module.scss'

export type ContainerProps = React.HTMLProps<HTMLDivElement>

const InputSearch: FC<ContainerProps> = (props) => {
  return <div className={classes.root} {...props} />
}

export default InputSearch
