import React from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import NestzLogo3 from '../../assets/images/LogoVersions/Nestz-logo3.jpeg';
// import HomeIcon from '../homeIcon/homeIcon.component';
// import CartDropdown from '../cart/cartDropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../redux/user/user.selector'
// import { signOutStart } from '../../redux/user/user.actions';


// import NavbarContainer from './Header.styles.jsx';
import './Navigation.styles.scss'
// navbar controls
const Navigation = (
  // { currentUser, hidden, signOutStart }
  ) => (
<>
<div className='logoContainer' href='/'>
  <img className= 'headerLogo' src={NestzLogo3} alt="NestzTrees"/>
</div>
<div id="navbarScroll" className='navbar'>
<div>
<Link>
<NavDropdown title="DETAILS" id="basic-nav-dropdown">
    <NavDropdown.Item as= {Link} to='/Details'>DETAILS</NavDropdown.Item>
    <NavDropdown.Item as= {Link} to="/Materials">MATERIALS</NavDropdown.Item>
    <NavDropdown.Item as= {Link} to="/Delivery">DELIVERY</NavDropdown.Item>
    <NavDropdown.Item as= {Link} to="/Customize">CUSTOMIZE</NavDropdown.Item>
    <NavDropdown.Item as= {Link} to="/Benefits">BENEFITS</NavDropdown.Item>
    <NavDropdown.Item as= {Link} to="/Shop">GET A NESTZ</NavDropdown.Item>
</NavDropdown>
<Nav.Link as= {Link} to='/FAQ' className='option'>F.A.Q.</Nav.Link>
<Nav.Link as= {Link} to='/Process' className='option'>MAKING A NESTZ</Nav.Link>
<Nav.Link as= {Link} to='/Story' className='option'>STORY</Nav.Link>
<Nav.Link as= {Link} to='/Social' className='option'>SOCIAL</Nav.Link>
<Nav.Link as= {Link} to='/Inquiries' className='option'>INQUIRIES</Nav.Link>
</Link>

</div>
{/* <HomeIcon/> */}
</div>
{/* { hidden ? null : <CartDropdown/>} */}
<Outlet />
</>

)

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// })

// const mapDispatchToProps = dispatch => ({
//   signOutStart: () => dispatch(signOutStart())
// })

export default Navigation
