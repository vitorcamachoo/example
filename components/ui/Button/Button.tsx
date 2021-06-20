import clsx from 'clsx'
import { FC } from 'react'
import classes from './Button.module.scss'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'contained' | 'outlined'
  color: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ variant = 'contained', color = 'primary', ...props }) => {
  return <button className={clsx(classes.root, classes[variant], classes[color])} {...props} />
}

export default Button
