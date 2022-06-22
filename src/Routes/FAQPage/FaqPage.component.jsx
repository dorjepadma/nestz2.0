import React from 'react';

import { Card } from 'react-bootstrap';



import './FaqPage.styles.scss';

const FAQ = () => (
<div className='faqPage'>
  <div className="faqTitle">
  <h1>FAQ</h1>
  </div>
{/* <img className='forestPath' src={forestPath} alt='a forest path'/> */}
  <Card className='faqCard'>
<Card.Body>
<Card.Title>
  <h2>
    Questions you may have. 
  </h2>
</Card.Title>
<Card.Text> 
  <h3>
    Is a Nestz a home?
  </h3>
A Nestz can be a home. They are 8 by 20 and can be fully fitted with a bathroom, kitchen, and bed. They are also modular, so we can put together more than one for you and custom build it into the home you want.
</Card.Text>
<Card.Text> 
  <h3>
    How do Nestz fit together?
  </h3>
All 6 sides of the Nestz unit are removable. Nestz can be stacked, set up end to end, or side by side to make a bigger unit as fits your space and budget.
</Card.Text>
<Card.Text> 
  <h3>
    What color are Nestz painted?
  </h3>
The interior can be painted before delivery to your color preference. All of our current models are a faux wood panel on the exterior. 
</Card.Text>
<Card.Text> 
  <h3>
    What is the difference between the base and luxury model?
  </h3>
The luxury model comes with a bathroom that includes a toilet, a shower, and an on demand water heater. The base model is more of an instant office or studio, the interior is not built out aside from two ceiling lights and the front door. 
</Card.Text>
<Card.Text> 
  <h3>
    How do I need to prepare the foundation for a Nestz?
  </h3>
A Nestz unit needs to be on stable ground. Whether that is leveled earth, a concrete foundation, or a porch is up to you. The only requirement is that it be level and not prone to movement during cyclical seasonal changes. 
</Card.Text>
<Card.Text> 
  <h3>
    What kind of utility hook ups do I need to place a Nestz?
  </h3>
If you get a Luxury unit with a bathroom you will need a sewer or sceptic connection with in 120 feet of the unit. For electricity a 120amp connection will be sufficient. A nestz can easily be set up for off grid housing. Nestz are not mobile housing, temporary housing, or permanent housing, so they often do not need permitting to set up. Please check your local ordinances if you have questions on what permits you may need to get one. 
</Card.Text>

</Card.Body>
</Card>
</div>
)

export default FAQ;
