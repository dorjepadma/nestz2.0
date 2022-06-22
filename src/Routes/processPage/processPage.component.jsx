import React from 'react';
import { Card, Container,  } from 'react-bootstrap';
import doorImage from '../../assets/images/processPage/NestzWithDoor.jpg'
import wallJoint from '../../assets/images/processPage/NestzWallJoint.JPG'
import WallPanel from '../../assets/images/processPage/nestzWallPanel.png'
import Floor from '../../assets/images/processPage/nestzFloor-1.png'
import Bathroom from '../../assets/images/processPage/NestzBathroom.jpg'
import Walls from '../../assets/images/processPage/outerWalls.png'
import Plug from '../../assets/images/processPage/nestzPlug.png'
import Wiring from '../../assets/images/processPage/nestzWiring.png'
import Lights from '../../assets/images/processPage/NetszLights.png'
import Heater from '../../assets/images/processPage/Nestz_heater.png'
import CompleteNestz from '../../assets/images/processPage/Complete_Nestz.png'

import './processPage.styles.scss'

const Process = () => (
<div className='processPage'>
<div className='processTitle'>
  <h1 >How a Nestz is made</h1>
  </div>

  <Container className='panelCard'>
    <Card.Body>
      <Card.Title>
        <h2>
          Nestz are made with thoughtful care and love. 
        </h2>
      </Card.Title>
      <Card.Text> 
      From the very start when the Nestz pieces are unloaded into our warehouse in Skamania County until the final delivery to you, we are taking care to build you the best house at the best price. Follow us on a journey of building a Nestz by scrolling down the page with us.
      </Card.Text>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
    <Card.Body>
      <Card.Text> 
        We start by assembling the main galvanized steel frame of the Nestz. This includes the ceiling and floor assembly. 
      </Card.Text>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
      <div>
      <Card.Img  className= 'processImage' src={Floor} alt='nestz walls being placed'/>
      </div>
    <Card.Body>
      <Card.Text>
        We continue by laying down with precision the high quality faux walnut wood vinyl floor. This floor gives the Nestz a comfortable and warm look and feel.
      </Card.Text>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
      <div> 
        <Card.Img  className= 'processImage' src={Walls} alt='nestz walls being placed'/>
      </div>
    <Card.Body>
      <Card.Text>
        then we place the R-15 rock wool insulated steel wall panels, we cut out the window and door openings. We install the double pained low e windows and insulate steel door. 
      </Card.Text>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
      <div>
        <Card.Img className= 'processImage' src={doorImage} alt='a nestz door'/>
      </div>
    <Card.Body>
      <Card.Text> 
        We install the double pained low e windows and insulate steel door. 
      </Card.Text>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
    <div>
      <Card.Img  className= 'processImage' src={Bathroom} alt='a nestz floor'/>
    </div>
  <Card.Body>
  <Card.Text>
    We next install the bathroom if it is part of the order, which includes a toilet and sink, with a shower as an optional configuration.
  </Card.Text>
  </Card.Body>
  </Container>

  <Container className='panelCard'>
  <div>
      <Card.Img  className= 'processImage' src={Wiring} alt='a nestz power input Plug'/>
    </div>
    <div>
      <Card.Img  className= 'processImage' src={Plug} alt='a nestz power input Plug'/>
    </div>
    <Card.Body>
    <Card.Text>
      We install the wiring, electrical fuse panel, water heater, and the plumbing. This is the guts that makes the home comfortable and work for you. Everyone likes electricity, water, and plumbing, so we thought, "lets give it to the people, they deserve a good living space."
    </Card.Text>
  </Card.Body>
  </Container>

  <Container className='panelCard'>
  <div>
      <Card.Img  className= 'processImage' src={Heater} alt='a nestz power input Plug'/>
    </div>
    <div>
      <Card.Img  className= 'processImage' src={Lights} alt='a nestz power input Plug'/>
    </div>
    <Card.Body>
    <Card.Text>
      After the electricity is installed, we install the lights so you and your family can see in a Nestz. I know it seems trivial, but being able to see is important. Following that, since we are in the Pacific North West we have added a heater so you can stay warm during the winter.
    </Card.Text>
  </Card.Body>
  </Container>

  <Container className='panelCard'>
    <div>
      <Card.Img className='processImage' variant="top" src={WallPanel} />
    </div>
    <div>
      <Card.Img className='processImage' variant="top" src={wallJoint} />
    </div>
    <Card.Body>
    <Card.Text>
      We place the decorative insulated metal wood look siding on the outside of the Nestz giving it a classical cabin look. 
    </Card.Text>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
    <Card.Body>
    <div>
      <Card.Img className='processImage' variant="top" src={CompleteNestz} />
    </div>
    <Card.Text>
      Now the Nestz is ready to be delivered to you.
    </Card.Text>
    </Card.Body>
  </Container>
</div>
)

export default Process;
