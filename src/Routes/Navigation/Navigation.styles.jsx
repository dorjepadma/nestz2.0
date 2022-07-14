import styled from "styled-components";
// import { Navbar } from 'react-bootstrap';


export const NavigationContainer = styled.div`

  height: 70px; 
  width: 100%; 
  display: flex; 
  justify-content: space-between; 
  background-color: #0EBFE9;
  padding: 3em;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px; 
}
.logo
{
  height: 100%; 
  width: 60px;
  border: .1em solid #021a40;}
  `
  
  
export const LogoContainer = styled.div`
height: 30%; 
width: 60px;
`

export const NavLinksContainer = styled.div`
width: 50%; 
height: 100%; 
display: flex; 
align-items: center; 
justify-content: flex-end;`

export const NavLink = styled.div`
padding: 10px 15px; 
  cursor: pointer;`

export const HeaderLogo = styled.div` 
height: 4em;
border: .1em solid #021a40;
margin-top: -2em;`



