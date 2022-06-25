import React from 'react';
import { Card } from 'react-bootstrap';

import FlyingBird from '../../assets/images/ContactPage/flyingBird.jpeg';
import Mailer from '../../Components/Email/email'

import './Contact.styles.scss';

const Contact = () => (
<div className='contactPage'>
<Card className='contactCard'>
<h2>Inquiries</h2>
  <Card.Body>
  <Card.Img className='contactImage' src={FlyingBird} alt='before and after container home'/>
  <Card.Text className='customizableCardText'>
  Our specialty is Nestz housing. We would be happy to speak with you any time about whether this housing solution will work for you. Contact us anytime with questions or inquiries about Nestz
  </Card.Text>
  <Card.Text className='customizableCardText'>
    Are you Nestz curious? Do you want to place an order? Give us a call, the first Nestz are landing and being delivered in August. 
  </Card.Text>
  </Card.Body>
</Card>
<Card className='contactCard'>
<h2>Contact Us</h2>
  <Card.Body>

  <Card.Text className='customizableCardText'>
  How to get in touch with us
  </Card.Text>
  <Card.Text className='customizableCardText'>
    Phone: 1.971.206.1400
    Email: NestzInc@gmail.com
  </Card.Text>
  <Mailer/>
  </Card.Body>
</Card>
</div>
)

export default Contact;
