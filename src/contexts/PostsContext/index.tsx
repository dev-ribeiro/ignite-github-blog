import { createContext, ReactNode, useEffect, useState } from 'react'

interface Post {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  author_association: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface PostContextType {
  posts: Post[]
}

export const PostContext = createContext({} as PostContextType)

interface PostContextProviderType {
  children: ReactNode
}

const storageKey = '@ignite-github-blog___v1'

export function PostContextProvider({ children }: PostContextProviderType) {
  const storedState = localStorage.getItem(storageKey)
  const initialState = JSON.parse(storedState!) || []
  const [posts, setPosts] = useState<Post[]>(initialState)

  useEffect(() => {
    fetch('https://api.github.com/repos/dev-ribeiro/ignite-github-blog/issues')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
        localStorage.setItem(storageKey, JSON.stringify(data))
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  )
}
