import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        background: lightgrey;
    }

    .main-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

`

export default GlobalStyle;