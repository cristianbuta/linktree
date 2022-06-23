import { createGlobalStyle } from "styled-components";
import { mobileHeight } from "~constants";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    @media (min-height: ${mobileHeight}) {
      height: 100vh;
    }
    overflow-x: hidden;
    margin: 0px;
    font-weight: 400;
    color: #fff;
    background-color: #121212;
    font-family: 'DM Sans', sans-serif!important;
    font-size: 20px;
    line-height: 32px;
    #app {
      height:100%;
    }
  }
`;

export default GlobalStyle;
