import React from 'react';
import { Card, Button } from 'react-bootstrap'

import Sticker from '../../assets/images/LogoVersions/Nestz-logo3.jpeg';


import './Shwag.styles.scss'

const Shwag = () => ( 
  
  <div className='shwagPage'>
    <div>
    <Card className='shwagCard'>
      <div className="cardHeader">

    <h2 >It is just Shwag, everyone loves Shwag</h2>
      </div>
      <Card.Body>

        <img className='shwagImage' src={Sticker} alt='before and after container home'/>

        <Card.Text className='shwagText'>
          We have stickers, they are a dollar. We also will soon have shirts and hats. They will be more. 
        </Card.Text >
      
      </Card.Body>
      <Button className='modelText' href='/shop'>Back to Shop</Button>
    </Card>
    </div>
    </div>
 
)
 
export default Shwag;
