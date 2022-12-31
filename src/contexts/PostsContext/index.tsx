import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Post {
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
  content: string
  updateContent: (content: string) => void
}

export const PostContext = createContext({} as PostContextType)

interface PostContextProviderType {
  children: ReactNode
}

export function PostContextProvider({ children }: PostContextProviderType) {
  const [posts, setPosts] = useState<Post[]>([])
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/repos/dev-ribeiro/ignite-github-blog/issues')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => console.error(error))
  }, [])

  function updateContent(content: string) {
    setContent(content)
  }

  return (
    <PostContext.Provider value={{ posts, content, updateContent }}>
      {children}
    </PostContext.Provider>
  )
}
