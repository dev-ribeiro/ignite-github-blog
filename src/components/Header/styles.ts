import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const HeaderContainer = styled.header`
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

export const ProfileContainer = styled.div`
  width: 54rem;
  padding: 1.5rem;
  margin-bottom: -6.625rem;
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme['blue-800']};
  border-radius: 10px;
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileDescription = styled.div`
  width: 100%;
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
`

export const ProfileBio = styled.span`
  color: ${(props) => props.theme['gray-200']};
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
  }
`
