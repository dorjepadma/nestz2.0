import React from 'react';

import GoogleMapPortland from '../../assets/images/DeliveryPage/GoogleMapPortland.png'
import CardinalMule from '../../assets/images/DeliveryPage/CardinalMule.png'

import './Delivery.styles.scss'

const Delivery = () => ( 
  
  <container className='deliveryPage'>
    <div>
      <div className='deliveryCard'>
      <h1>Delivering a Nestz </h1>
        <div className='deliveryInfo'>
          <img className='deliveryImage' src={GoogleMapPortland} alt='map of Portland and Vancouver'/>
          <div className='deliveryText'>
          Nestz are delivered directly to your property. If you live within 30 miles of Portland it is a flat fee of $200. Outside of the greater Portland area we can deliver them anywhere in Washington or Oregon, add $4 per mile after the initial 30 miles.
          </div>
        </div>
        <div className='deliveryInfo'>
          <div className='deliveryText'>
            When we bring the Nestz unit to your property we can place it where you wish as long as it can be accessed by our Cardinal Mule forklift. 
            The ground it is to rest on needs to be flat, or a structure created on the ground so it can rest flat. We currently have 9 available for delivery To schedule a delivery date please contact us by Phone or Email. 
          </div >
          <img className='deliveryImage' src={CardinalMule} alt='forklift'/>
          </div>
          <div className='deliveryInfo'>
          <div className='deliveryText'>
            Once delivered the Nestz unit can be placed and hooked up within as little time as 3 hours. Hooking up to septic or sewer, electricity, and/or gas will depend upon you, but we are happy to help consult with you on the best way to do this. 
          </div>
        </div>
      </div>
    </div>
    </container>
 
)
 
export default Delivery;
