import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const PostHeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.875rem;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${backgroundImage});
`

export const LogoImage = styled.img`
  margin-top: 4rem;
  width: 10.5rem;
  height: 4rem;
`

export const PostInformationContainer = styled.div`
  width: 54rem;
  height: 10.5rem;
  padding: 1.5rem;
  margin-bottom: -5.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme['blue-800']};
  border-radius: 10px;
`

export const LinksGithubContainer = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 12px;
  }
`

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
`

export const PostTitle = styled.h1`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`

export const PostAdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const IconWrapper = styled.div`
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
