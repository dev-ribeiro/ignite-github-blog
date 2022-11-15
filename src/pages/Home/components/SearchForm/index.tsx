import { PublicationsCountContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <PublicationsCountContainer>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </PublicationsCountContainer>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
