import React, { Fragment, useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../Components/CartIcon/CartIcon.component';
import CartDropdown from '../../Components/CartDropdown/CartDropdown.component';
import { UserContext } from '../../Context/user.context';
import { CartContext } from '../../Context/cart.context';
import { signOutUser }  from '../../utils/Firebase/firebase.utils';
// import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import NestzLogo3 from '../../assets/images/LogoVersions/Nestz-logo3.jpeg';

import { NavigationContainer, HeaderLogo, NavBarLinkContainer, LeftContainer, RightContainer, NavBarInnerContainer, NavBarExtendedContainer, NavBarLink, SignOutDiv, OpenLinksButton, NavBarLinkExtended } from './Navigation.styles';
// navbar controls
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);
  const [ extendNavBar, setExtendNavBar ] = useState(false);
 
  return (
<Fragment>
<NavigationContainer extendNavBar={extendNavBar}>
  <NavBarInnerContainer >
    <RightContainer>
      <Link  to='/' >
        <HeaderLogo src={NestzLogo3} alt='nestz logo'></HeaderLogo>
      </Link>
    </RightContainer>
    <LeftContainer>
      <NavBarLinkContainer>
        < NavBarLink  to='/shop' >SHOP</ NavBarLink>
        < NavBarLink to='/FAQ' >F.A.Q.</ NavBarLink>
        < NavBarLink  to='/Process' >MAKING NESTZ</ NavBarLink>
        < NavBarLink  to='/Story' >STORY</ NavBarLink>
        < NavBarLink  to='/Social' >SOCIAL</ NavBarLink>
        < NavBarLink  to='/Inquiries' >INQUIRIES</ NavBarLink>
        < NavBarLink  to='/Details' >DETAILS</ NavBarLink>
        < NavBarLink  to="/Materials" >MATERIALS</ NavBarLink>
        < NavBarLink  to="/Delivery" >DELIVERY</ NavBarLink>
        < NavBarLink  to="/Customize" >CUSTOMIZE</ NavBarLink>
        < NavBarLink  to="/Contact" >CONTACT</ NavBarLink>
        < NavBarLink  to="/Shop" >GET A NESTZ</ NavBarLink>
        {
          currentUser ? (
            <SignOutDiv className=''onClick={signOutUser}>SIGN OUT </SignOutDiv>
            ) : ( 
            <NavBarLink to="/SignIn" >SIGN IN</NavBarLink>
          )
        }
        <OpenLinksButton onClick={() => {setExtendNavBar((curr) => !curr)
        }}>
          {extendNavBar ? <> &#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
   
          <CartIcon />
      </NavBarLinkContainer>
  </LeftContainer>
</NavBarInnerContainer>
{ extendNavBar && 

 ( <NavBarExtendedContainer> 
< NavBarLinkExtended  to='/shop' >SHOP</ NavBarLinkExtended>
        < NavBarLinkExtended to='/FAQ' >F.A.Q.</ NavBarLinkExtended>
        < NavBarLinkExtended  to='/Process' >MAKING NESTZ</ NavBarLinkExtended>
        < NavBarLinkExtended  to='/Story' >STORY</ NavBarLinkExtended>
        < NavBarLinkExtended  to='/Social' >SOCIAL</ NavBarLinkExtended>
        < NavBarLinkExtended  to='/Inquiries' >INQUIRIES</ NavBarLinkExtended>
        < NavBarLinkExtended  to='/Details' >DETAILS</ NavBarLinkExtended>
        < NavBarLinkExtended  to="/Materials" >MATERIALS</ NavBarLinkExtended>
        < NavBarLinkExtended  to="/Delivery" >DELIVERY</ NavBarLinkExtended>
        < NavBarLinkExtended  to="/Customize" >CUSTOMIZE</ NavBarLinkExtended>
        < NavBarLinkExtended  to="/Contact" >CONTACT</ NavBarLinkExtended>
        < NavBarLinkExtended  to="/Shop" >GET A NESTZ</ NavBarLinkExtended>
        {
          currentUser ? (
            <SignOutDiv className=''onClick={signOutUser}>SIGN OUT </SignOutDiv>
            ) : ( 
            <NavBarLink to="/SignIn" >SIGN IN</NavBarLink>
          )
        }
</NavBarExtendedContainer>)

}
{isCartOpen && <CartDropdown />}

</NavigationContainer>
<Outlet />
</Fragment>

)}


export default Navigation
