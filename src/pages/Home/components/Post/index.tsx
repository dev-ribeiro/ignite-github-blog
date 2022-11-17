/* eslint-disable camelcase */
import Markdown from 'markdown-to-jsx'
import { Link } from 'react-router-dom'
import { PostContainer, PostContent, PostHeader } from './styles'

interface PostContentType {
  title: string
  body: string
  created_at: string
  id: string
}

export function Post({ title, body, created_at, id }: PostContentType) {
  return (
    <PostContainer>
      <Link to={`/posts/${id}`}>
        <PostHeader>
          <h2>{title}</h2>
          <span>{created_at}</span>
        </PostHeader>
        <PostContent>
          <Markdown>{body}</Markdown>
        </PostContent>
      </Link>
    </PostContainer>
  )
}
