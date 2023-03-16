import { Outlet } from  'react-router-dom';

import Directory from '../../Components/Directory/directory.component';
import { Row } from 'react-bootstrap';

import categories from '../../Components/MenuItem/HomeCategories.jsx';
// import NestzLogo2 from '../../assets/images/LogoVersions/Nestz-logo2.jpg';
import { HomePageContainer } from './home.styles';


const Home = () => {
  
  return (
   
    <HomePageContainer>
    <div className='titleContainer'> 
    <h2>Tiny Homes and Micro Housing in the PNW</h2>  
   </div>
   <div className='titleContainer2'> 
    <h2>Contact us at Phone: 1.971.206.1400 Email: NestzInc@gmail.com</h2>  
   </div>

   <div className='jumbotron' >
     <div>
         <div md='auto' className='jumbotronTitle'>
           <div className='textContainer'>
             Nestz are move in ready 8' x 20' tiny homes constructed and delivered in the Pacific Northwest. 
           </div>
         </div>
     </div>
   </div> 
   <Row className='walkthrough'>
         <div className="walkThroughText" >A Bedroom Nestz Walk through</div>
         <div className="walkThroughText2" >Explore the spacious and complete Nestz Bedroom Model, call to arrange a walkthrough</div>
        <iframe title= 'nestz walkthrough' type="text/javascript" async data-short="3JjZmpRwQ" width="100%" height="500px" src="https://app.cloudpano.com/tours/3JjZmpRwQ?sceneId=QehdNaOgc">
        </iframe>
   </Row>
    <div className="walkThroughText">
             Explore the World of Tiny Homes
    </div>
    <div className="microHousingText">
             Microhousing is a perfect solution for civic, government, corporate businesses, and individuals looking for quick, reliable, and affordable housing. Our Nestz are built to last and are designed to be easily moved and relocated.
    </div>
    <div className="microHousingText">
            Contact us for civic or corporate micro housing solutions.
    </div>
  <Directory className='homeDirectory' categories={categories} />
  <Outlet />
  </HomePageContainer>
 
  );
};

export default Home;
