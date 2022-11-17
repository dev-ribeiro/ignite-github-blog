import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PostContextProvider } from './contexts/PostsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <PostContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </PostContextProvider>
  )
}
