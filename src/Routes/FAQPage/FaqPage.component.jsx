import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import Button from '../../Components/Button/Button.component';

import './FaqPage.styles.scss';

const FAQ = () => (
<div className='faqPage'>
  <div className="faqTitle">
    <h1>FAQ</h1>
  </div>
  <Card className='faqCard'>
    <div className='faqBody'>
      <div className="faqCardTitle">
          Answers to questions you may have:
      </div>
      <div className='faqCardBlock'> 
        <div className="faqCardTitle">
          Are a Nestz a home?
        </div>
          A Nestz can be a home. They are 8' by 20' and can be fully fitted with a bathroom, kitchen, and bed. They are also modular, so we can put together more than one for you and custom build it into the home you want. To see how they are constructed visit the Making a Nestz page.
        <Link to='/Construction' className='FAQlink'>
        <Button buttonType='blue'>Making a Nestz</Button>
        </Link>
      </div>
        <div className='faqCardBlock'> 
          <div className="faqCardTitle">
              How do Nestz fit together?
          </div>
            All 6 sides of the Nestz unit are removable. Nestz can be stacked, set up end to end, or side by side to make a bigger unit as fits your space and budget. When multiple units are combined, each unit will need at least 6 points of contact with the ground. 
        </div>
      <div>
      <div className='faqCardBlock'> 
        <div className="faqCardTitle">
          Are Nestz customizable?
        </div>
        Nestz are fully customizable. When you purchase one you can add a bathroom, kitchen, bed, or even a roof porch. You can also add a water heater, air conditioner, or even a double walled window. You can paint them how you want, you can combine them into multiple levels and multiple connected units. To learn more about customizing a Nestz visit the Customize page.
        <Link className='FAQlink' to='/Customize'>
        <Button buttonType='blue'>Customize a Nestz</Button>
        </Link>
      </div>
      <div className='faqCardBlock'>
        <div className="faqCardTitle">
          How are Nestz delivered?
        </div>
        We deliver the Nestz to your property on top of our flatbed trailer and then place it where you want. The delivery charge is $200 dollars if within a 30 mile radius of the PDX airport. The delivery fee is 4$ per mile. This fee includes delivery to your property but does not include time helping to set it up. We will deliver anywhere within Washington or Oregon state. For more information read the Delivery page.
        <Link className='FAQlink' to='/Delivery'>
        <Button buttonType='blue'>We Deliver</Button>
        </Link>
      </div>
      <div className='faqCardBlock'>
        <div className="faqCardTitle">
          What is the difference between the Home and the Office model?
        </div>
        The Home model comes with a bathroom that includes a toilet, a shower, a kitchenette, and an on demand water heater. The Office model is more of an instant office or studio, the interior is built out with two ceiling lights and a utility bathroom. For a visual representation and to see the detailed specs, visit our Specs page.
        <Link to='/Specs' className='FAQlink'>
        <Button buttonType='blue'>Floor Plans</Button>
        </Link>
      </div>
      <div className='faqCardBlock'> 
        <div className="faqCardTitle">
          How do I prepare the foundation for a Nestz?
        </div>
        A Nestz unit needs to be on stable ground. It needs to have 6 points of level contact, all four corners and two midpoint spots. Whether that is leveled earth, a concrete foundation, or a porch is up to you. The only requirement is that it be level and not prone to movement during cyclical seasonal changes. 
      </div>
      <div className='faqCardBlock'>
        <div className="faqCardTitle">
          What kind of utility hook ups do I need to place a Nestz?
        </div>
        If you get a Luxury unit with a bathroom you will need a sewer or sceptic connection with in 120 feet of the unit. For electricity a 30 amp connection will be sufficient. A nestz can easily be set up for off grid housing. Nestz are not mobile housing, temporary housing, or permanent housing. Please check your local ordinances if you have questions on what permits you may need to get one. Feel free to contact us if you need guidance on regulations you might face while setting up a Nestz.  
      </div>
      </div>
        <div className='faqCardBlock'> 
          <div className="faqCardTitle">
              What Quality Standards are Nestz built to?
          </div>
            Nestz are built to WAC Code 296-150P and also carry a Washington State stamp. What does this mean you may ask? A rental is designed for less than 180 days continuous occupancy and can be moved.  
        </div>
      <div>
    </div>
  </div>

  </Card>
</div>
)

export default FAQ;
