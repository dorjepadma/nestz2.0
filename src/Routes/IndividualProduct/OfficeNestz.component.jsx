import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
// import ScriptTag from 'react-script-tag';

import officeBlueprint from '../../assets/images/DetailsPage/officeModel.png'

import './NestzDetail.styles.scss'


const Office = () => (

<div className='productDetailsPage'>
  <div className='title'>
  OFFICE NESTZ
  </div>
  <div className='productCards'>
<div >

  <Card className='modelCard'>
  <Card.Body className='modelBody'>
  <Card.Img className='modelImage' src={officeBlueprint} alt='before and after container home'/>
  <div>
  <Card.Text className='modelText'>
      The Office Nestz is customizable. It is a perfect office, retreat, man or woman cave for your property. It is also ideal for craftsmen or those who want to style out their Nestz with there own vision. Join our social page to put your ideas on how to make the perfect Nestz into the world or gain inspiration from others.
  </Card.Text>
  <Card.Text className='modelText'>
    The Office Nestz, like all Nestz can be customized to meed your needs. It can be combined with other Nestz to make larger rooms. 
  </Card.Text>
  </div>
    </Card.Body>
  </Card>
</div>
<div>
  <Card className='modelCard'>
    {/* <ScriptTag type="text/javascript" async data-short="J9eULtQZy" width="100%"
height="500px" src="https://app.cloudpano.com/public/shareScript.js"></ScriptTag> */}
    <Card.Body className='modelBody'>
  <div>

  <Card.Text className='modelText'>
      The Office Nestz is a base unit meant to be an office, it has a door, three windows, and a utilitarian interior. It is a great instant office, a studio, a meditation or retreat room. The bathroom has a macerating toilet and a sink, but not a shower. You can use it for storage or you can build it out how you wish. They are readily available for immediate delivery.
    </Card.Text>
    <Card.Text className='modelText'>
   The floor is faux wood laminated. It comes with electrical 30 amp service with 5 outlets and 3 lights and a propane hot water heater.
  </Card.Text>
  <Button className='modelText' href='/shop'>Back To Shop</Button>
  </div>
    </Card.Body>
  </Card>
</div>
  </div>
</div>
)

export default Office;
