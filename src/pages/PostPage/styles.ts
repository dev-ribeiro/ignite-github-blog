import styled from 'styled-components'

export const PostPageContainer = styled.div`
  max-width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    color: ${(props) => props.theme['gray-200']};
  }
`

export const PostContentWrapper = styled.div`
  padding: 40px 32px;
  min-width: 54rem;

  @media (max-width: 768px) {
    min-width: 0;
    max-width: 100%;
  }
`
