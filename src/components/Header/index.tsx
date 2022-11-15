/* eslint-disable camelcase */
import {
  Avatar,
  FollowersInfo,
  HeaderContainer,
  IconWrapper,
  LogoImage,
  ProfileBio,
  ProfileContainer,
  ProfileDescription,
  ProfileTitle,
  ProfileTitleWrapper,
} from './styles'
import logo from '../../assets/logo.svg'
import { useFetchUserData } from '../../hooks/useFetchUserData'

export function Header() {
  const { userData } = useFetchUserData()
  const { avatar_url, bio, company, followers, html_url, login, name } =
    userData

  return (
    <HeaderContainer>
      <LogoImage src={logo} alt="" />
      <ProfileContainer>
        <Avatar src={avatar_url} alt="" />
        <ProfileDescription>
          <ProfileTitleWrapper>
            <ProfileTitle>{name}</ProfileTitle>
            <a href={html_url} target="_blank" rel="noreferrer">
              GITHUB
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </ProfileTitleWrapper>
          <ProfileBio>{bio}</ProfileBio>
          <FollowersInfo>
            <IconWrapper>
              <i className="fa-brands fa-github"></i>
              <span>{login}</span>
            </IconWrapper>
            <IconWrapper>
              <i className="fa-solid fa-building"></i>
              <span>{company}</span>
            </IconWrapper>
            <IconWrapper>
              <i className="fa-solid fa-user"></i>
              <span>{followers} seguidores</span>
            </IconWrapper>
          </FollowersInfo>
        </ProfileDescription>
      </ProfileContainer>
    </HeaderContainer>
  )
}
