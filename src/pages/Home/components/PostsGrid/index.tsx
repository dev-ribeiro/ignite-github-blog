/* eslint-disable array-callback-return */
import { useFetchIssuesData } from '../../../../hooks/useFetchIssuesData'
import { publishedDateRelativeToNow } from '../../../../utils/formatter'
import { Post } from '../Post'
import { PostGridContainer } from './styles'

export function PostGrid() {
  const { postsData } = useFetchIssuesData()

  return (
    <PostGridContainer>
      {postsData.map((post) => {
        if (post.author_association === 'OWNER') {
          return (
            <Post
              key={JSON.stringify(post)}
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
