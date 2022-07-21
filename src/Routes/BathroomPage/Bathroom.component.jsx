import React from 'react';
import { Card, Button } from 'react-bootstrap'

import BathroomImage from '../../assets/images/CustomizeExamples/bathroom-la-miko.jpeg';


import './Bathroom.styles.scss'

const Bathroom = () => ( 
  
  <div className='bathroomPage'>
    <div>
    <Card className='bathroomCard'>
      <div class="cardHeader">

    <h2 >The Bathroom in your Nestz</h2>
      </div>
      <Card.Body>

        <img className='bathroomImage' src={BathroomImage} alt='before and after container home'/>

        <Card.Text className='paintText'>
          If you are like us, you want a bathroom in the place you live. Nestz has you covered. You can choose the Bathroom options and you get a toilet, a shower, and a sink. This is the perfect solution for you, your guests, and your family if using the Nestz as a living space.
        </Card.Text >
        <Card.Text className='paintText'>
       The bathroom is compact to give you maximum living space but it has everything you need. When hooked up you will have hot water for the shower and the sink and a macerating toilet to connect to your sewer or septic. The room is private, with its own upper wall window for ventilation that opens upwards. With this addition you will never have to leave your Nestz!   
       The space is 4 feet by 8 feet wide, and more than enough space to take care of all of your needs. 
        </Card.Text>
      </Card.Body>
      <Button className='modelText' href='/shop'>Back to Shop</Button>
    </Card>
    </div>
    </div>
 
)
 
export default Bathroom;
