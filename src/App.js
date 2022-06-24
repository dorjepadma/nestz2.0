import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/home.component';
import Benefits from './Routes/benefitsPage/benefits.component';
import Contact from './Routes/contactpage/Contact.component';
import Delivery from './Routes/deliveryPage/Delivery.component';
import FAQ from './Routes/FAQPage/FaqPage.component';
import Footer from './Components/footer/Footer.component';
import Process from './Routes/processPage/processPage.component';
import SignIn from './Components/signIn/signIn.component';
import Social from './Routes/socialpage/Social.component';
import Story from './Routes/Story/story.component';
import Navigation from './Routes/Navigation/Navigation.component';

const App = () => {
  return (
    <div>
    <Routes>
      < Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} />
      <Route  path='Benefits' index element={<Benefits />} />
      <Route  path='Contact' index element={<Contact />} />
      <Route  path='Delivery' index element={<Delivery />} />
      <Route  path='FAQ' index element={<FAQ />}/>
      <Route  path='Process' index element={<Process />}/>
      <Route  path='SignIn' index element={<SignIn />}/>
      <Route  path='story' index element={<Story />}/>
      <Route  path='Social' index element={<Social />}/>
      </Route>
     
    </Routes>
    <Footer/>
    </div>
  );
};

export default App;
