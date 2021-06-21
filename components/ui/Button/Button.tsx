import clsx from 'clsx'
import { FC } from 'react'
import classes from './Button.module.scss'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'link' | 'contained' | 'outlined'
  color?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonProps> = ({
  className,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  ...props
}) => {
  return <button className={clsx(classes.root, classes[`${variant}-${color}`], classes[size], className)} {...props} />
}

export default Button
