/* eslint-disable array-callback-return */
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostsContext'
import { publishedDateRelativeToNow } from '../../../../utils/formatter'
import { Post } from '../Post'
import { PostGridContainer } from './styles'

export function PostGrid() {
  const { posts } = useContext(PostContext)

  return (
    <PostGridContainer>
      {posts.map((post) => {
        if (post.author_association === 'OWNER') {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              created_at={publishedDateRelativeToNow(new Date(post.created_at))}
            />
          )
        }
      })}
    </PostGridContainer>
  )
}
