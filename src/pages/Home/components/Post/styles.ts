import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 26rem;
  padding: 2rem;

  background: ${(props) => props.theme['blue-700']};
  border-radius: 10px;

  & > a {
    text-decoration: none;
  }
`

export const PostHeader = styled.header`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['blue-200']};
  }
`

export const PostContent = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-align: justify;

  * {
    color: ${(props) => props.theme['gray-200']};
  }
`
