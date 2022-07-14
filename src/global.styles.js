import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;
  
  @media screen and (max-width: 1000px) {
    font-size: 12px;
    padding:0;
    margin:0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}
`

