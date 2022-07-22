import { Outlet } from  'react-router-dom';

import Directory from '../../Components/Directory/directory.component';
import { Row } from 'react-bootstrap';

import categories from '../../Components/MenuItem/HomeCategories.jsx';
import NestzLogo2 from '../../assets/images/LogoVersions/Nestz-logo2.jpg';
import { HomePageContainer } from './home.styles';


const Home = () => {
  
  return (
   
    <HomePageContainer>
    <div className='titleContainer'> 
    <h2>Tiny Homes and Zen Places</h2>  
   </div>

   <div className='jumbotron' >
     <div>
         {/* <div className="homepage">
         <img className= 'logoFadeIn' width="10%"  src={NestzLogo2} w3-animate-fading='true' alt='trees and bird logo of Nestz'/>
         </div> */}
         <div md='auto' className='jumbotronTitle'>
           <div className='textContainer'>
             Nestz are move in ready 8' x 20' tiny homes constructed and delivered in the Pacific Northwest. 
           </div>
         </div>
     </div>
   </div> 
   <Row className='walkthrough'>
         <div className="walkThroughText" >A Bedroom Nestz Walk through</div>
        <iframe title= 'nestz walkthrough' type="text/javascript" async data-short="3JjZmpRwQ" width="100%" height="500px" src="https://app.cloudpano.com/tours/3JjZmpRwQ?sceneId=QehdNaOgc">
        </iframe>
   </Row>
    <div className="walkThroughText">
             Explore the World of Tiny Homes
    </div>
  <Directory className='homeDirectory' categories={categories} />
  <Outlet />
  </HomePageContainer>
 
  );
};

export default Home;
