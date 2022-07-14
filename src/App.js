import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/home.component';
import Benefits from './Routes/benefitsPage/benefits.component';
import Contact from './Routes/contactpage/Contact.component';
import Delivery from './Routes/deliveryPage/Delivery.component';
import FAQ from './Routes/FAQPage/FaqPage.component';
import Footer from './Components/footer/Footer.component';
import Process from './Routes/processPage/processPage.component';
import Authentication from './Routes/AuthenticationPage/Authentication.component';
import Shop from './Routes/shop/shop.component';
import Social from './Routes/socialpage/Social.component';
import Story from './Routes/Story/story.component';
import Navigation from './Routes/Navigation/Navigation.component';
import Checkout from './Routes/CheckoutPage/Checkout.component';

import { GlobalStyles } from './global.styles';


const App = () => {
  return (
    <div>
      <GlobalStyles />
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} />
      <Route  path='Benefits' index element={<Benefits />} />
      <Route  path='Contact' index element={<Contact />} />
      <Route  path='Delivery' index element={<Delivery />} />
      <Route  path='FAQ' index element={<FAQ />}/>
      <Route  path='Process' index element={<Process />}/>
      <Route  path='SignIn' index element={<Authentication />}/>
      <Route  path='Shop' index element={<Shop />}/>
      <Route  path='story' index element={<Story />}/>
      <Route  path='Social' index element={<Social />}/>
      <Route  path='Checkout' index element={<Checkout />}/>
      </Route>
    </Routes>
    <Footer/>
    </div>
  );
};

export default App;
