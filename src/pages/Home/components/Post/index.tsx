import Markdown from 'markdown-to-jsx'
import { PostContainer, PostContent, PostHeader } from './styles'

const markdownContent = `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rerum, dolorum recusandae, sed voluptatibus sequi nesciunt modi odit, quos ut ratione explicabo nostrum corporis doloremque eveniet porro necessitatibus. Illo, cupiditate!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rerum, dolorum recusandae, sed voluptatibus sequi nesciunt modi odit, quos ut ratione explicabo nostrum corporis doloremque eveniet porro necessitatibus. Illo, cupiditate!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rerum, dolorum recusandae, sed voluptatibus sequi nesciunt modi odit, quos ut ratione explicabo nostrum corporis doloremque eveniet porro necessitatibus. Illo, cupiditate!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum rerum, dolorum recusandae, sed voluptatibus sequi nesciunt modi odit, quos ut ratione explicabo nostrum corporis doloremque eveniet porro necessitatibus. Illo, cupiditate!
`

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </PostHeader>
      <PostContent>
        <Markdown>{markdownContent}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
