import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostsContext'
import { PublicationsCountContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  const { posts } = useContext(PostContext)

  return (
    <SearchFormContainer>
      <PublicationsCountContainer>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </PublicationsCountContainer>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
