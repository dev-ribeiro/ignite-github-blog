/* eslint-disable camelcase */
import Markdown from 'markdown-to-jsx'
import { PostContainer, PostContent, PostHeader } from './styles'

interface PostContentType {
  title: string
  body: string
  created_at: string
}

export function Post({ title, body, created_at }: PostContentType) {
  return (
    <PostContainer>
      <PostHeader>
        <h2>{title}</h2>
        <span>{created_at}</span>
      </PostHeader>
      <PostContent>
        <Markdown>{body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
