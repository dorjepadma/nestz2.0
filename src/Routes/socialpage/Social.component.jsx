import React from 'react';
import { Container } from 'react-bootstrap'

import Curator from './Curator.component';

import './Social.styles.scss';

const Social = () => (
<Container className= 'socialPage'>
    <div className='socialCardContainer'>
 
  
  <div className= 'socialHeader'>
  <h2>Nestz Life.</h2>
  <p>
We would love to hear from you and see how you would use a Nestz. Connect with us on our Twitter, LinkedIn, Instagram, or Facebook pages. Tag us with #Nestz and our social media will promote your creative lifestyle.
  </p>
    </div>   


  <div className='curatorContainer'>
      <Curator feedId="d8aa9f35-b8eb-4e3c-9ee4-9a0dbb61cd92" />
  </div>
  </div>
</Container>
)

export default Social;
