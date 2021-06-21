import { useAtom } from 'jotai'

import { categories, Category } from 'utils/api'
import searchAtom from 'atoms/search'

import Menu from 'components/layout/Menu/Menu'
import MenuItem from 'components/layout/Menu/MenuItem'

export default function Home() {
  const [search, updateSearch] = useAtom(searchAtom)

  return (
    <Menu>
      {(categories as Category[]).map((category) => (
        <MenuItem
          selected={category === search.category}
          key={category}
          onClick={() => updateSearch((search) => ({ ...search, category }))}
        >
          {category}
        </MenuItem>
      ))}
    </Menu>
  )
}
