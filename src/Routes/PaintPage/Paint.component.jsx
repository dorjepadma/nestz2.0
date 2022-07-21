import React from 'react';
import { Card, Button } from 'react-bootstrap'

import ColorfulGirl from '../../assets/images/CustomizeExamples/ColorfulGirl.jpeg';
// import Button from '../../Components/Button/Button.component';

import './Paint.styles.scss'

const Paint = () => ( 
  
  <container className='paintPage'>
    <div>
    <Card className='paintCard'>
    <h2>Paint your Nestz the color you want</h2>
      <Card.Body>
        <Card.Img className='paintImage' src={ColorfulGirl} alt='before and after container home'/>
        <Card.Text className='paintText'>
          Some people like the color white, others are looking for more color in their lives. Purple? Maybe. Blue, sure!, Yellow or Red? You decide. Since your Nestz is built for you upon order, you can choose the color of your Nestz.
        </Card.Text >
        <Card.Text className='paintText'>
       The standard Nestz Color is white, but we can paint it any color you want. When you order just let us know what color you want and we will paint it for you. Please pick a color from the Home Depot Sherwin Williams color palette and we will take care of the rest. When it arrive at your property your Nestz is ready to move into. We can even paint the bathroom one color, the living area another color. Give us a shout out and let us know what you want. 
        </Card.Text>
      </Card.Body>
      <Button className='modelText' href='/shop'>Back to Shop</Button>
    </Card>
    </div>
    </container>
 
)
 
export default Paint;
