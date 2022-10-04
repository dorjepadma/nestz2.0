import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

import './Footer.styles.scss';

const Footer = () => (
<div className='footer'>
<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-3 footer-column">
        <ul className="nav flex-column">
          <div className="nav-item">
            <span className="footer-title">Offerings:</span>
          </div>
          {/* <li className="nav-item">
            <Link to='/Rental' className="nav-link" href="#">RENTALS</Link>
          </li> */}
          <li className="nav-item">
            <Link to='/Shop' className='nav-link'>PURCHASE</Link>
          </li>
          <li className="nav-item">
            <Link to='/Details' className='nav-link'>DETAILS</Link>
          </li>
          <li className="nav-item">
            <Link to='/FAQ' className="nav-link" href="#">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <div className="nav-item">
            <span className="footer-title">Company:</span>
          </div>
          <li className="nav-item">
            <Link to='/Story' className='nav-link'>OUR STORY</Link>
          </li>
          <li className="nav-item">
          <Link to='/Inquiries' className='nav-link'>INQUIRIES</Link>
          </li>
          <li className="nav-item">
          <Link to='/Social' className='nav-link'>SOCIAL and NEWS</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <div className="nav-item">
            <span className="footer-title">Contact & Support:</span>
          </div>
          <li className="nav-item">
            <span className="nav-link">Phone: 1.971.206.1400</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Email: NestzInc@gmail.com</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
   
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright
        ">©RobsinInc 
        <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div className="col-md-4 box">
  <SocialIcon className='socialIcon' url="https://twitter.com/IncNestz" style={{ height: 25, width: 25 }}/>
  <SocialIcon className='socialIcon' url="https://www.facebook.com/Nestz-102851565356987" style={{ height: 25, width: 25 }}/>
  <SocialIcon className='socialIcon' url="https://instagram.com/nestzinc" style={{ height: 25, width: 25 }}/>
  <SocialIcon className='socialIcon' url="https://linkedin.com/dorjepadma" style={{ height: 25, width: 25 }}/>
  <SocialIcon className='socialIcon' url="https://www.pinterest.com/nestzinc" style={{ height: 25, width: 25 }}/>
      </div>
    </div>
  </div>
</footer>
</div>
)

export default Footer;
