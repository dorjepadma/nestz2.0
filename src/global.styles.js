import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed', sans-serif;
  
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding:10px;
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

