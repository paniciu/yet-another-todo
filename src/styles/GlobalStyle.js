import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        background: rgb(22,88,148);
        background: linear-gradient(180deg, rgba(22,88,148,1) 0%, rgba(0,164,198,1) 100%);
        font-family: "Times New Roman", Times, serif;
    }

    input {
        height: 34px;
        border: none;
    }

    .error {
        color: #ffb6b6;
    }

`

export default GlobalStyle;