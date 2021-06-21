import { FC } from 'react'

import classes from './Menu.module.scss'

export type MenuProps = {
  children: React.ReactNode
}

const Menu: FC<MenuProps> = (props) => {
  return <ul className={classes.list} {...props} />
}

export default Menu
