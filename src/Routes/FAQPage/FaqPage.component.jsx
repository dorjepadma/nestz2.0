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
    Questions you may have:
</div>
<div> 
  <div className="faqCardTitle">
    Is a Nestz a home?
  </div>
A Nestz can be a home. They are 8 by 20 and can be fully fitted with a bathroom, kitchen, and bed. They are also modular, so we can put together more than one for you and custom build it into the home you want. To see how they are constructed visit the Making a Nestz page.
<Link to='/Construction'>
<Button buttonType='blue'>Making a Nestz</Button>
</Link>
</div>
  <Card.Text> 
    <div className="faqCardTitle">
        How do Nestz fit together?
    </div>
  All 6 sides of the Nestz unit are removable. Nestz can be stacked, set up end to end, or side by side to make a bigger unit as fits your space and budget.
  </Card.Text>
<div>
<div className="faqCardTitle">
    What color are Nestz painted?
  </div>
The interior can be painted before delivery to your color preference. All of our current models are a faux wood panel on the exterior. 
</div>
<Card.Text> 
  <h3>
    What is the difference between the Home and the Office model?
  </h3>
The Home model comes with a bathroom that includes a toilet, a shower, a kitchenette, and an on demand water heater. The Office model is more of an instant office or studio, the interior is built out with two ceiling lights and a utility bathroom. 
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

</div>
</Card>
</div>
)

export default FAQ;
