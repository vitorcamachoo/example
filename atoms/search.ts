import { atom } from 'jotai'

const defaultValue = {
  title: '',
  category: 'All',
}

export default atom(defaultValue)
