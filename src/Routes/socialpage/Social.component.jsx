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
      <Curator feedId="49b41e79-496f-4e44-b999-ac6cf4f453ba" />
  </div>
  </div>
</Container>
)

export default Social;
