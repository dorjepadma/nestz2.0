import React from 'react';
import Card from 'react-bootstrap/Card'

import GoogleMapPortland from '../../assets/images/DeliveryPage/GoogleMapPortland.png'
import CardinalMule from '../../assets/images/DeliveryPage/CardinalMule.png'

import './Delivery.styles.scss'

const Delivery = () => ( 
  
  <container className='deliveryPage'>
    <div>
      <div className='deliveryCard'>
      <h2>Delivery </h2>
        <div className='deliveryInfo'>
          <img className='deliveryImage' src={GoogleMapPortland} alt='map of Portland and Vancouver'/>
          <div className='deliveryText'>
          Nestz are delivered directly to your property by us. If you live within 30 miles of Portland it is a flat fee of 200$ Outside of the greater Portland area we can deliver them to anywhere in Washington or Oregon, addomg $4 per mile after the initial 30 mile fee.
          </div>
        </div>
        <div className='deliveryInfo'>
          <div className='deliveryText'>
            The Nestz comes to your property and we place it where you wish as long as it can be accessed by our Cardinal Mule forklift. 
            The ground needs to be flat, or a structure created that it can rest on flat. We are currently expecting the first Nestz to arrive for delivery in August. To schedule a delivery date please contact us by Phone or Email. 
          </div >
          <img className='deliveryImage' src={CardinalMule} alt='forklift'/>
          </div>
          <div className='deliveryInfo'>
          <div className='deliveryText'>
            Once delivered the Nestz unit can be built and hooked up within as little time as 3 hours. Hook up to septic, sewer, electricity, and or gas will depend upon you, but we are happy to help consult with you during the process. 
          </div>

        </div>
      </div>
    </div>
    </container>
 
)
 
export default Delivery;
