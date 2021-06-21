import clsx from 'clsx'
import { FC } from 'react'
import classes from './Typography.module.scss'

type TypographyProps = React.ButtonHTMLAttributes<HTMLSpanElement> & {
  color?: 'default' | 'primary' | 'textSecondary'
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'
}

const Typography: FC<TypographyProps> = ({ variant = 'body1', color = 'default', ...props }) => {
  const TypographyComponent = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body1: 'p',
    body2: 'p',
    subtitle1: 'span',
    subtitle2: 'span',
  }[variant]

  return <TypographyComponent className={clsx(classes.root, classes[variant], classes[color])} {...props} />
}

export default Typography
