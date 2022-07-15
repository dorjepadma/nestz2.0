import React from 'react';
import { Card, Container } from 'react-bootstrap';
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

import './ConstructionPage.styles.scss'

const Construction = () => (
<div className='processPage'>
  <div className='processTitle'>
    <h1 >How Nestz are made</h1>
  </div>
  <Container className='panelCard'>
    <Card.Body>
      <div className= 'processText'>
        <h2>
          Nestz are made with craftsman quality, care, and love. 
        </h2>
      </div>
      <div className= 'processText'> 
        From the very start when the Nestz pieces are unloaded into our warehouse in Skamania County until the final delivery to you, we are taking care to build you the best house at the best price. Follow us on a journey of building a Nestz by scrolling down the page with us.
      </div>
      
      <div className= 'processText'> 
        First, the main galvanized steel frame of the Nestz is assembled. This includes the ceiling and floor assembly. The frame is incredibly strong allowing the Nestz unit to be moved without fear of damage. It also will allow you to stack the Nestz on top of each other. It is possible to build multiple storied Nestz units.
      </div>
    </Card.Body>
  </Container>

  <Container className='panelCard'>
      <div className= 'constructionImgContainer'>
      <Card.Img  className='constructionImage' src={Floor} alt='nestz walls being placed'/>
      </div>
      <div className= 'processText'>
       A High quality faux walnut wood vinyl floor is laid down by our craftsmen. This floor gives the Nestz a comfortable and warm look and feel. It is easy to clean and take care of and does not scratch easily, ensuring your investment in the Nestz will look good for years to come. The ceiling is thin white metal sheet panels. We can paint the ceiling or the interior walls any color you desire.
      </div>

  </Container>

  <Container className='panelCard'>
      <div className= 'processText'>
        R-15 rock wool insulated steel wall panels are placed around the main frame. Windows and a door opening are carefully cut out of the panels. The rock wool is incredible energy efficient and is a great way to keep the Nestz warm. It also helps to keep out unwanted noise from the environment. The rock wool is also naturally fire resistant making it ideal for placement in country forest surroundings. 
      </div>
      <div className= 'constructionImgContainer'> 
        <Card.Img className='constructionImage' src={Walls} alt='nestz walls being placed'/>
      </div>


  </Container>

  <Container className='panelCard'>
    <div className= 'constructionImgContainer'>
      <Card.Img className='constructionImage' src={doorImage} alt='a nestz door'/>
    </div>
    <div className= 'processText'> 
      Double paned low e windows and an insulated steel door are installed. The door is strong, solid, and secure with a steel dead bolt. The windows open to allow fresh air in along with plenty of light. After all gaps are filled with high quality spray foam, the windows and door are sealed with a vinyl edging.
    </div>
  </Container>

  <Container className='panelCard'>
    <div className= 'processText'>
      Next the bathroom is installed. It includes a ceramic toilet and sink along with the plumbing so you can hook up to a sewer or sceptic line as soon as your receive the Nestz. There is also a shower as an optional configuration. Water drainage is not problem for the Nestz.There are two lights in the bathroom mounted in the ceiling as well as high window for more light and ventilation.
    </div>
    <div className= 'constructionImgContainer' >
      <Card.Img  className='constructionImage' src={Bathroom} alt='a Nestz Bathroom'/>
    </div>
  </Container>

  <Container className='panelCard'>
    <div className= 'constructionImgContainer'>
      <Card.Img className='constructionImage' src={Wiring} alt='a nestz power input Plug'/>
    </div>
    <div className= 'constructionImgContainer'>
      <Card.Img className='constructionImage' src={Plug} alt='a nestz power input Plug'/>
    </div>

    <div className= 'processText'>
      The wiring, electrical fuse panel, water heater, battery pack and plumbing are installed. This is the guts that make the home comfortable and work for you. Everyone likes electricity, water, and plumbing, so we thought, "lets give it to the people, they deserve a good living space." The result is an office or living space that is completely move in ready. All you have to worry about is what kind of furniture you want to place within the Nestz.
    </div>

  </Container>

  <Container className='panelCard'>
    <div className= 'processText'>
      After the electricity is installed, the LED lights are installed so you and your family can see in a Nestz. I know it seems trivial, but being able to see is important. Following that, since we are in the Pacific North West we have added a heater so you can stay warm during the winter. There is an option to install an air conditioner if you want, now that the summers are getting warmer.
    </div>
    <div className='constructionImgContainer'>
      <Card.Img className='constructionImage' src={Heater} alt='a nestz power input Plug'/>
    </div>
    <div className='constructionImgContainer'>
      <Card.Img className='constructionImage' src={Lights} alt='a nestz power input Plug'/>
    </div>
 
 
  </Container>

  <Container className='panelCard'>
    <div className='constructionImgContainer'>
      <img className='constructionImage' src={WallPanel} alt='wall panel'/>
    </div>
    <div className='constructionImgContainer'>
      <img  className='constructionImage' src={wallJoint} alt='detail of wall panel'/>
    </div>
  
    <div className= 'processText'>
      The decorative insulated metal faux wood siding on the outside of the Nestz is placed creating a classical cabin look. This also helps with insulation and contributes to the overall look of the Nestz. The siding is securely fastened ensuring that the Nestz can weather what ever challenges the environment of the Pacific Northwest will throw at it. 
    </div>

  </Container>

  <Container className='panelCard'>
    <div className= 'processText'>
      Your Nestz is ready to be delivered to you. It is a warm, safe, and friendly environment that is quiet and comfortable. We hope you enjoy your new Nestz.
    </div>
    <div className='constructionImgContainer'>
      <Card.Img className='constructionImage' src={CompleteNestz} />
    </div>
  </Container>
</div>
)

export default Construction;
