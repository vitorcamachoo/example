import clsx from 'clsx'
import { FC } from 'react'

import classes from './Menu.module.scss'

export type MenuItemProps = {
  selected?: boolean
  onClick: () => void
  children: React.ReactNode
}

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <div
      className={clsx(classes.item, {
        [classes.selected]: props.selected,
      })}
    >
      <li {...props} />
    </div>
  )
}

export default MenuItem
