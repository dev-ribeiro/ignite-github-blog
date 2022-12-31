import { ChangeEvent, useContext } from 'react'
import { PostContext } from '../../../../contexts/PostsContext'
import { PublicationsCountContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  const { posts, updateContent } = useContext(PostContext)

  function handleUpdateUserQuery(event: ChangeEvent) {
    event.preventDefault()
    const target = event.target as HTMLInputElement
    updateContent(target.value)
  }

  return (
    <SearchFormContainer>
      <PublicationsCountContainer>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </PublicationsCountContainer>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleUpdateUserQuery}
      />
    </SearchFormContainer>
  )
}
