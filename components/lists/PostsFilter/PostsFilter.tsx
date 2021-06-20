import { useUpdateAtom } from 'jotai/utils'

import { categories, Category } from 'utils/api'
import searchAtom from 'atoms/search'

export default function Home() {
  const updateSearch = useUpdateAtom(searchAtom)

  return (
    <div>
      {(categories as Category[]).map((category) => (
        <button key={category} onClick={() => updateSearch((search) => ({ ...search, category }))}>
          {category}
        </button>
      ))}
    </div>
  )
}
