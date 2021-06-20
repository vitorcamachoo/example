import get from 'lodash.get'

export function filterPosts<T extends object>(data: T[], text: string, key: string): T[] {
  try {
    return data.filter((item: T) => {
      const element: string = get(item, key)
      return element.toLowerCase().includes(text.toLowerCase())
    })
  } catch (error) {
    console.log(error)
    return data
  }
}
