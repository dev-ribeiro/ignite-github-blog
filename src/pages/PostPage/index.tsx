import Markdown from 'markdown-to-jsx'
import { useFindPostById } from '../../hooks/useFindPostById'
import { PostContentWrapper, PostPageContainer } from './styles'

export function PostPage() {
  const { findedPostById } = useFindPostById()

  return (
    <PostPageContainer>
      <PostContentWrapper>
        <Markdown>{findedPostById!.body}</Markdown>
      </PostContentWrapper>
    </PostPageContainer>
  )
}
