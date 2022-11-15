import { PostGrid } from './components/PostsGrid'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <SearchForm />
      <PostGrid />
    </HomeContainer>
  )
}
