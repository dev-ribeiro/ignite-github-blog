/* eslint-disable camelcase */
import {
  PostHeaderContainer,
  IconWrapper,
  LogoImage,
  PostInformationContainer,
  LinksGithubContainer,
  PostTitle,
  PostAdditionalInfo,
  PostDetails,
} from './styles'
import logo from '../../assets/logo.svg'

export function PostInfo() {
  return (
    <PostHeaderContainer>
      <LogoImage src={logo} alt="" />
      <PostInformationContainer>
        <LinksGithubContainer>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="fa-regular fa-less-than"></i>
            VOLTAR
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            VER NO GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </LinksGithubContainer>
        <PostDetails>
          <PostTitle>Javascript é legal</PostTitle>
          <PostAdditionalInfo>
            <IconWrapper>
              <i className="fa-brands fa-github"></i>
              <span>dev-ribeiro</span>
            </IconWrapper>
            <IconWrapper>
              <i className="fa-solid fa-calendar-days"></i>
              <span>Há 1 dia</span>
            </IconWrapper>
            <IconWrapper>
              <i className="fa-solid fa-comment"></i>
              <span>5 comentários</span>
            </IconWrapper>
          </PostAdditionalInfo>
        </PostDetails>
      </PostInformationContainer>
    </PostHeaderContainer>
  )
}
