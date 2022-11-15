import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        line-height: 160%;
    }

    html, body {
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        background: ${(props) => props.theme['blue-900']};
    }
`
