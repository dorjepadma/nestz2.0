
import NestzLogo2 from '../../assets/images/LogoVersions/Nestz-logo2.jpg';



const HomePage = () => {
  return (
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
  );
};

export default HomePage;
