import React from 'react';
// import { Link } from 'react-router-dom'

import { Card, Button } from 'react-bootstrap';
// import ScriptTag from 'react-script-tag';

import BedroomBlueprint from '../../assets/images/DetailsPage/BedroomModel.png'


import './NestzDetail.styles.scss'; 

const Bedroom = () => (


<div className='productDetailsPage'>
  <div className='title'>
  BEDROOM NESTZ 
  </div>
<div >
  <div className='modelCard'>
  <Card.Body className='modelBody'>
  <Card.Img className='modelImage' src={BedroomBlueprint} alt='before and after container home'/>
  <div>
  <Card.Text className='modelText'>
  The Bedroom Nestz house is customizable. On the outside is a wood styled metal panelling, 3 windows. The Custom Nestz unit comes prepared to be the perfect bedroom for you. Furnish it as you wish. The bathroom which is optional and can be removed for more living space; includes a sink, a toilet, and shower. We can custom paint it to in whatever way you like. From there you can customize it as you desire, including lighting and other exciting features we will be adding as we scale up. It takes 8 hours to put it together on your property and is usable the very day it is delivered. 
  </Card.Text>
  </div>
  </Card.Body>
  </div>
</div>
<div>
  <Card className='modelCard'>
    <Card.Body className='modelBody'>
    {/* <ScriptTag type="text/javascript" async data-short="3JjZmpRwQ" width="100%"
height="500px" src="https://app.cloudpano.com/public/shareScript.js"></ScriptTag> */}
  <div>
  <Card.Text className='modelText'>
       It is a great instant extra room for visiting guests, a mother in law unit, extra house, air bnb rental unit for your land, or suite unit for a festival. They are modular so you can build complete homes out of them by fitting them together, either expanding the floor footprint, or building up to a second story. You can continue to build it out and adapt it to your needs. 
    </Card.Text>
    <Card.Text className='modelText'>
  The floor is laminate faux wood. It comes with electrical 30 amp service with 5 outlets and 6 lights. In the bedroom model the door is in the front center of the unit. 
  </Card.Text>
  <Button className='modelText' href='/shop'>Back to Shop</Button>
  </div>
    </Card.Body>
  </Card>
</div>

</div>
)



export default Bedroom;
