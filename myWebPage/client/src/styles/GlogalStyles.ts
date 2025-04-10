import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
     body {
        background: ${({theme}) => theme.bgColor};
        width: 100vw;
        height: 100vh;
        display: block;
     }
`