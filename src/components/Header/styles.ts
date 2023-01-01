import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const HeaderContainer = styled.header`
  max-width: 100%;
  max-height: 18.5rem;
  display: flex;
  gap: 2.875rem;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${backgroundImage});

  @media (max-width: 768px) {
    justify-content: space-around;
    max-height: min-content;
  }
`

export const LogoImage = styled.img`
  max-width: 10.5rem;
  max-height: 4rem;

  @media (max-width: 768px) {
    /* margin-bottom: 1000px; */
  }
`

export const ProfileContainer = styled.div`
  max-width: 54rem;
  padding: 1.5rem;
  margin-bottom: -6.625rem;
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme['blue-800']};
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 0 1rem;
    margin-bottom: 0;
    max-width: 100%;
    flex-direction: column;
  }
`

export const Avatar = styled.img`
  max-width: 9.25rem;
  max-height: 9.25rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    align-self: center;
  }
`

export const ProfileDescription = styled.div`
  max-width: 100%;
`

export const ProfileTitleWrapper = styled.div`
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

export const ProfileTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
`

export const ProfileBio = styled.span`
  color: ${(props) => props.theme['gray-200']};
  font-size: 1rem;
`

export const FollowersInfo = styled.div`
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
