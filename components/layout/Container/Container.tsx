import clsx from 'clsx'
import { FC } from 'react'

export type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const InputSearch: FC<ContainerProps> = ({ className, maxWidth = 'lg', ...props }) => {
  return <div className={clsx([`container-${maxWidth}`, className])} {...props} />
}

export default InputSearch
