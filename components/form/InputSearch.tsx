import clsx from 'clsx'
import { FC, useState } from 'react'
import { useUpdateAtom } from 'jotai/utils'
import searchAtom from 'atoms/search'
import Button from 'components/ui/Button/Button'
import classes from './InputSearch.module.scss'

export type InputSearchProps = React.HTMLProps<HTMLInputElement>

const InputSearch: FC<InputSearchProps> = (props) => {
  const [title, setText] = useState('')
  const [isActive, triggerActive] = useState(false)
  const setTextAtom = useUpdateAtom(searchAtom)

  return (
    <div className={clsx(classes.root)}>
      <input
        className={clsx('xs-col-8')}
        onClick={() => triggerActive(true)}
        onChange={(event) => setText(event.target.value as string)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') setTextAtom((search) => ({ ...search, title }))
        }}
        {...props}
      />
      {isActive && (
        <Button size="large" onClick={() => setTextAtom((search) => ({ ...search, title }))}>
          Search
        </Button>
      )}
    </div>
  )
}

export default InputSearch
