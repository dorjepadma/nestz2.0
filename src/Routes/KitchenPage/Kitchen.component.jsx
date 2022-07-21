import React from 'react';
import { Card, Button } from 'react-bootstrap'

import KitchenImage from '../../assets/images/Kitchen/Kitchen.jpeg';
import KitchenPlan from '../../assets/images/DetailsPage/WithKitchen.png';

import './Kitchen.styles.scss'

const Kitchen = () => ( 
  
  <div className='kitchenPage'>
   
    <div className='kitchenCard'>
      <div class="cardHeader">

    <h2 >Put a micro kitchen in your Nestz tiny home</h2>
      </div>
     

        <img className='kitchenImage' src={KitchenImage} alt='before and after container home'/>
     
        <Card.Text className='paintText'>
          If you are like us, you like to eat and will want a Kitchen in the place you live. Nestz has you covered. You can choose the Kitchen options and you get a stove top with two electric ceramic burners, a sink, a refrigerator, and a freezer with your Nestz. 
        </Card.Text >
        <Card.Text className='paintText'>
       The Kitchen is compact to give you maximum living space but it has everything you need. When hooked up you have your stove top, refrigerator, and sink. Being so cozy and having everything you need, you may not want to ever leave your Nestz tiny home. That is up to you, we have made more than a few hermits very comfortable with their lives.   
       The space taken up by the unite is 40 inches wide and 25 inches deep. It requires a 115v 12 amp connection, which we have covered for you.
        </Card.Text>
          <img className='kitchenFloorPlanImage' src={KitchenPlan} alt='before and after container home'/>
        <Button className='modelText' href='/shop'>Back to Shop</Button>
    </div>
    </div>
 
)
 
export default Kitchen;
