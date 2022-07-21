import { Outlet } from  'react-router-dom';

import Directory from '../../Components/Directory/directory.component';


import NestzLogo2 from '../../assets/images/LogoVersions/Nestz-logo2.jpg';
import ContainerHomesMountains from '../../assets/images/ContainerHomesMountains.jpeg';
import grannyFlat from '../../assets/images/grannyFlat.jpeg';
import podBlueprint from '../../assets/images/podBlueprint.png';
import socialContainer from '../../assets/images/socialContainer.jpeg';
import ContactUs from '../../assets/images/ContactUs.png';
import { HomePageContainer } from './home.styles';

const Home = () => {
  const categories = [
    {
      title: 'Buy a Nestz',
      subTitle: 'Make One Home',
      imageUrl: [grannyFlat],
      linkUrl: 'Shop',
      size: 'large',
      id: 1,
    },
    {
    title: 'Nestz',
    subTitle: 'The Story',
    imageUrl: [ContainerHomesMountains],
    linkUrl: 'Story',
    id: 2
  },
  {
    title: 'The Details',
    subTitle: 'product specs and options',
    imageUrl: [podBlueprint],
    linkUrl: 'Details',
    id: 3
  },
  {
    title: 'Inquiries',
    subTitle: 'Have questions?',
    imageUrl: [ContactUs],
    linkUrl: 'Inquiries',
    id: 4
  },
  {
    title: 'Social Nestz',
    subTitle: 'Share your adventure',
    imageUrl: [socialContainer],
    size: 'large',
    linkUrl: 'Social',
    id: 5
  },
  ];
  
  return (
   
    <HomePageContainer>
    <div className='titleContainer'> 
    <h2>Tiny Homes and Zen Places</h2>  
   </div>

   <div className='jumbotron' >
     <div>
         <div className="homepage">
         <img className= 'logoFadeIn' width="10%"  src={NestzLogo2} w3-animate-fading='true' alt='trees and bird logo of Nestz'/>
         </div>
         <div md='auto' className='jumbotronTitle'>
           <div className='textContainer'>
             Nestz are move in ready 8' x 20' tiny homes available for order in the Pacific Northwest. 
           </div>
         </div>
     </div>
   </div> 
   

  <Directory categories={categories} />
  <Outlet />
  </HomePageContainer>
 
  );
};

export default Home;
