import React, { Fragment, useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../Components/CartIcon/CartIcon.component';
import CartDropdown from '../../Components/CartDropdown/CartDropdown.component';
import { UserContext } from '../../Context/user.context';
import { CartContext } from '../../Context/cart.context';
import { signOutUser }  from '../../utils/Firebase/firebase.utils';
// import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import NestzLogo3 from '../../assets/images/LogoVersions/Nestz-logo3.jpeg';
// import HomeIcon from '../homeIcon/homeIcon.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../redux/user/user.selector'
// import { signOutStart } from '../../redux/user/user.actions';

// import NavbarContainer from './Header.styles.jsx';
import './Navigation.styles.scss'
// navbar controls
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);
 
  return (
<Fragment>
<div className='navigation'>
<Link className='logo-container' to='/' >
  <img className= 'headerLogo' src={NestzLogo3} alt="NestzTrees"/>
</Link>
<div className='nav-links-container'>
<Link className='nav-link' to='/shop' >SHOP</Link>
<Link to='/FAQ' className='nav-link'>F.A.Q.</Link>
<Link  to='/Process' className='nav-link'>MAKING NESTZ</Link>
<Link  to='/Story' className='nav-link'>STORY</Link>
<Link  to='/Social' className='nav-link'>SOCIAL</Link>
<Link  to='/Inquiries' className='nav-link'>INQUIRIES</Link>
<Link  to='/Details' className='nav-link'>DETAILS</Link>
<Link  to="/Materials" className='nav-link'>MATERIALS</Link>
<Link  to="/Delivery" className='nav-link'>DELIVERY</Link>
<Link  to="/Customize" className='nav-link'>CUSTOMIZE</Link>
<Link  to="/Contact" className='nav-link'>CONTACT</Link>
<Link  to="/Shop" className='nav-link'>GET A NESTZ</Link>
{
  currentUser ? (
    <span className='nav-link' onClick={signOutUser}>SIGN OUT </span>
    ) : ( 
    <Link  to="/SignIn" className='nav-link'>SIGN IN</Link>
  )
}
  <CartIcon />
</div>
{isCartOpen && <CartDropdown />}
</div>
<Outlet />
</Fragment>

)}


export default Navigation
