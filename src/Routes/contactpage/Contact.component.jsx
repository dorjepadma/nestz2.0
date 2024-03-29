import React from 'react';
import { Card } from 'react-bootstrap';

import ContactUs from '../../assets/images/ContactPage/contactUs.jpeg';
import Mailer from '../../Components/Email/email'
import { BUTTON_TYPE_CLASSES } from '../../Components/Button/Button.component';

import './Contact.styles.scss';

const Contact = () => (
<div className='contactPage'>
<div className='contactCard'>
<Card.Text className='contactHeading'>Inquiries</Card.Text>
  <Card.Body>
  <img className='contactImage' src={ContactUs} alt='three phones to call us'/>
  <Card.Text className='contactHeading'>
    We Want to Hear From You
    </Card.Text>
  <Card.Text className='contactText'>
    We are Nestz Inc. We are a small business located in Portland, Oregon. We are a family owned and operated business. We are passionate about our product and we are excited to share it with you. For current pricing and delivery information and costs please call or email us.
  </Card.Text>
  <Card.Text className='contactText'>
    Our specialty is Nestz housing. We would be happy to speak with you any time about how this housing solution will work for you. Contact us anytime with questions or inquiries about Nestz.
  </Card.Text>
  <Card.Text className='contactText'>
    Are you Nestz curious? Do you want to place an order? Give us a call, Nestz are currently available for delivery. 
  </Card.Text>
  </Card.Body>
</div>
<Card className='contactCard'>
<h2>Contact Us</h2>
  <Card.Body>

  <Card.Text className='contactText'>
  How to get in touch with us
  </Card.Text>
  <div className='contactText'>
    Phone: 1.971.206.1400
    Email: NestzInc@gmail.com
  </div>
  <div className='mailerButton'>
  <Mailer buttonType={ BUTTON_TYPE_CLASSES.blue }/>
  </div>
  </Card.Body>
</Card>
</div>
)

export default Contact;
