import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home/home.component';
import Benefits from './Routes/benefitsPage/benefits.component';
import Contact from './Routes/contactpage/Contact.component';
import Delivery from './Routes/deliveryPage/Delivery.component';
import FAQ from './Routes/FAQPage/FaqPage.component';
import Footer from './Components/footer/Footer.component';
import Construction from './Routes/ConstructionPage/ConstructionPage.component';
import Authentication from './Routes/AuthenticationPage/Authentication.component';
import Shop from './Routes/shop/shop.component';
import Social from './Routes/socialpage/Social.component';
import Story from './Routes/Story/story.component';
import Navigation from './Routes/Navigation/Navigation.component';
import Checkout from './Routes/CheckoutPage/Checkout.component';
import Customize from './Routes/CustomizePage/Customize.component';
import ProductSpecs from './Routes/SpecsPage/Specs.component'

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
      <Route  path='Customize' index element={<Customize />} />
      <Route  path='Delivery' index element={<Delivery />} />
      <Route  path='FAQ' index element={<FAQ />}/>
      <Route  path='Construction' index element={<Construction />}/>
      <Route  path='SignIn' index element={<Authentication />}/>
      <Route  path='Shop' index element={<Shop />}/>
      <Route  path='Specs' index element={<ProductSpecs />}/>
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
