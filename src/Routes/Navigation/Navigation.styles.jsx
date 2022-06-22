import styled from "styled-components";
// import { Navbar} from 'react-bootstrap';


const NavbarContainer = styled.div`
.header {
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0EBFE9;

  .logoContainer {
    height: 100%;
    width: 25%;
  }
  
  .headerLogo {
    height: 140%;
    border: .1em solid #021a40;
    margin-top: -.45em;
  }
  
  .basic-navbar-nav > li > .basic-nav-dropdown { background-color: #FF0000; }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
 
}
`
;
export default NavbarContainer;

