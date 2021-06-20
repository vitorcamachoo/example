const URL = process.env.NEXT_PUBLIC_API_URL as string

export type Category = 'All' | 'Product' | 'Blog' | 'News & Press' | 'Resources'

export interface Post {
  id: string
  title: string
  description: string
  slug: string
  url: string
  target: string
  type: string
  date: string
  category: Category
}

export const categories = ['All', 'Product', 'Blog', 'News & Press', 'Resources']

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(URL)
    const data = await response.json()

    return data.posts
  } catch {
    return []
  }
}
