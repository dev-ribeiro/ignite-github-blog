import styled from 'styled-components'

export const PostGridContainer = styled.section`
  max-width: 100%;
  margin-top: 2.9375rem;
  padding: 0 0.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
