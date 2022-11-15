// import { useFetchIssuesData } from '../../../../hooks/useFetchIssuesData'
import { Post } from '../Post'
import { PostGridContainer } from './styles'

export function PostGrid() {
  //   const { postsData } = useFetchIssuesData()

  return (
    <PostGridContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostGridContainer>
  )
}
