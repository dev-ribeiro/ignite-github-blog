import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const PostHeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  gap: 2.875rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${backgroundImage});
`

export const LogoImage = styled.img`
  width: 10.5rem;
  height: 4rem;
`

export const PostInformationContainer = styled.div`
  width: 54rem;
  padding: 1.5rem;
  margin-bottom: -6.625rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${(props) => props.theme['blue-800']};
  border-radius: 10px;
`

export const LinksGithubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const PostTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`

export const PostAdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const IconWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  i {
    color: ${(props) => props.theme['blue-300']};
  }

  span {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1rem;
  }
`
