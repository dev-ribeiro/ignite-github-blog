/* eslint-disable array-callback-return */
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostsContext'
import { publishedDateRelativeToNow } from '../../../../utils/formatter'
import { Post } from '../Post'
import { PostGridContainer } from './styles'

export function PostGrid() {
  const { posts, content } = useContext(PostContext)

  const showPosts = !content
    ? posts
    : posts.filter((post) => {
        return (
          post.title.indexOf(content) !== -1 ||
          post.body.indexOf(content) !== -1
        )
      })

  return (
    <PostGridContainer>
      {showPosts.map((post) => {
        if (post.author_association === 'OWNER') {
          return (
            <Post
              key={post.id}
              id={String(post.id)}
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
