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
import { NavLink } from 'react-router-dom'
import { useFindPostById } from '../../hooks/useFindPostById'
import { publishedDateRelativeToNow } from '../../utils/formatter'

export function PostInfo() {
  const { findedPostById } = useFindPostById()

  return (
    <PostHeaderContainer>
      <LogoImage src={logo} alt="" />
      <PostInformationContainer>
        <LinksGithubContainer>
          <NavLink to="/">
            <i className="fa-regular fa-less-than"></i>
            VOLTAR
          </NavLink>
          <a href={findedPostById!.html_url} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </LinksGithubContainer>
        <PostDetails>
          <PostTitle>{findedPostById!.title}</PostTitle>
          <PostAdditionalInfo>
            <IconWrapper>
              <i className="fa-brands fa-github"></i>
              <span>{findedPostById!.user.login}</span>
            </IconWrapper>
            <IconWrapper>
              <i className="fa-solid fa-calendar-days"></i>
              <span>
                {publishedDateRelativeToNow(
                  new Date(findedPostById!.created_at),
                )}
              </span>
            </IconWrapper>
            <IconWrapper>
              <i className="fa-solid fa-comment"></i>
              <span>{findedPostById!.comments} comentários</span>
            </IconWrapper>
          </PostAdditionalInfo>
        </PostDetails>
      </PostInformationContainer>
    </PostHeaderContainer>
  )
}
