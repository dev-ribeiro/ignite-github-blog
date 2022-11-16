import styled from 'styled-components'

export const PostPageContainer = styled.div`
  width: 100%;
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
  width: 54rem;
`
