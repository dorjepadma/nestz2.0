import React from 'react';
import Card from 'react-bootstrap/Card'

import GoogleMapPortland from '../../assets/images/DeliveryPage/GoogleMapPortland.png'

import './Delivery.styles.scss'

const Delivery = () => ( 
  
  <container className='deliveryPage'>
    <div>
      <Card className='deliveryCard'>
      <h2>Delivery </h2>
        <div>
          <img className='deliveryImage' src={GoogleMapPortland} alt='map of Portland and Vancouver'/>
          <div className='deliveryText'>
          Nestz will are delivered to your property. If you live within 30 miles of Portland it is a flat fee of 200$ Outside of the greater Portland area we can deliver them to anywhere in the US, but the fee will be proportional.
          </div>
          <div className='deliveryText'>
            The Nestz comes to your property and we can place it where you wish as long as it can be accessed by a small forklift. 
            The ground needs to be flat, or a structure created that it can rest on flat. We are currently expecting the first Nestz to arrive for delivery in August. To schedule a delivery date please contact us by Phone or Email. 
          </div >
          <div className='deliveryText'>
            Once delivered the Nestz unit will be built within a 3 hour window. Hook up to septic, sewer, electricity, and or Gas will depend upon you, but we are happy to help with the process. 
          </div>
        </div>
      </Card>
    </div>
    </container>
 
)
 
export default Delivery;
