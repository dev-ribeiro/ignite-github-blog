import { useContext } from 'react'
import { useParams } from 'react-router'
import { PostContext } from '../contexts/PostsContext'

export function useFindPostById() {
  const { id } = useParams()
  const { posts } = useContext(PostContext)

  const findedPostById = posts.find((post) => {
    return post.id === Number(id)
  })

  return {
    findedPostById,
  }
}
