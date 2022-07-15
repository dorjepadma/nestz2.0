import React from 'react';
import { Image } from 'react-bootstrap'

import blankNestz from '../../assets/images/CustomizeExamples/insideNestz.jpg'
import blankCanvasNestz from '../../assets/images/CustomizeExamples/blankCanvasNestz.jpg'
import NestExample from '../../assets/images/CustomizeExamples/NestExample.jpg'
import NestDoubleHouse from '../../assets/images/CustomizeExamples/NestzDoubleHouse.png'
import './Customize.styles.scss'


const Customize = () => ( 
  <div className='customizePage'>
    <div className='customizeTitleCard'>
<h2> NESTZ ARE FULLY CUSTOMIZABLE </h2>
<text className='customizableCardText'>Not one solution fits everyone. Nestz are highly customizable. Initially the customization will be brief, but as we ramp up production look forward to many new and exciting features coming online. Customizable paint, customizable murals, customizable internet of things options. </text>

    </div>
    <div className='customizeCard'>
    <Image 
    className='image' 
    src={blankNestz} 
    alt='inside a nestz' rounded/>
    <text className='customizableCardText'>The Basic Nestz is a blank canvas on the inside. The walls are white, the doors are also white. They can be painted whatever color you like. The floor is a fuax walnut. You can customize it as you wish creating the unique home or office you are looking for. 
  </text>
    </div>
    <div className='customizeCard'>
    <Image className='image' src={NestExample} alt='A Nestz turned into a beautiful home'/>
    <text className='customizableCardText'>All models are made out of insulted steel, providing for protection from the elements and great insulation. We can place air conditioners and heaters in the Nestz for you. Also you can add an on demand water heater.
  </text>
    </div>
  <div className='customizeCard'>
    <Image className='image' src={blankCanvasNestz} alt='a nest from the outside'/>
    <text className='customizableCardText'>The Customization is up to you. Nestz can be stacked, built out length wise or width wise. They are completely modular. They extend 8 feet in one direction and 20 in the other. You can put roof porches on top, or even other Nestz units. Build your dream home or office how you like it. Please contact us for more information.
    </text>
    </div>
    <div className='customizeCard'>
    <Image className='image' src={NestDoubleHouse} alt='Two Nestz Combined'/>
    <text className='customizableCardText'>Nestz models can be combined to create larger houses. You can combine as many as you like either lengthwise or widthwise. Nestz are modular and can be stacked. This is the perfect option for a quick build out of a more expansive guest home. It allows for a larger kitchen, bathroom, and living room. As well the frame can make an excellent covered porch. Call us for more details. 
  </text>
    </div>
  </div>



)
export default Customize;
