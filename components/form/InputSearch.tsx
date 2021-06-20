import { FC, useState } from 'react'
import { useUpdateAtom } from 'jotai/utils'
import searchAtom from 'atoms/search'
import classes from './InputSearch.module.scss'

export type InputSearchProps = React.HTMLProps<HTMLInputElement>

const InputSearch: FC<InputSearchProps> = (props) => {
  const [title, setText] = useState('')
  const [isActive, triggerActive] = useState(false)
  const setTextAtom = useUpdateAtom(searchAtom)

  return (
    <div className={classes.root}>
      <input
        onClick={() => triggerActive(true)}
        onChange={(event) => setText(event.target.value as string)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') setTextAtom((search) => ({ ...search, title }))
        }}
        {...props}
      />
      {isActive && <button onClick={() => setTextAtom((search) => ({ ...search, title }))}>Search</button>}
    </div>
  )
}

export default InputSearch
