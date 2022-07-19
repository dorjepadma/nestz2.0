import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";


import { onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from "./utils/Firebase/firebase.utils";

import Home from './Routes/Home/home.component';
import Bathroom from './Routes/BathroomPage/Bathroom.component';
import Bedroom from './Routes/IndividualProduct/BedroomNestz.component'
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
import Office from './Routes/IndividualProduct/OfficeNestz.component'
import Checkout from './Routes/CheckoutPage/Checkout.component';
import Customize from './Routes/CustomizePage/Customize.component';
import Shwag from './Routes/ShwagPage/Shwag.component';
import ProductSpecs from './Routes/SpecsPage/Specs.component'
import Paint from './Routes/PaintPage/Paint.component';
import Kitchen from './Routes/KitchenPage/Kitchen.component';

import { setCurrentUser } from "./Store/User/User.action";

import { GlobalStyles } from './global.styles';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div>
      <GlobalStyles />
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route  index element={<Home />} />
      <Route path='/bathroom' index element={<Bathroom />} />
      <Route path='/bedroom' index element={<Bedroom />} />
      <Route  path='Benefits' index element={<Benefits />} />
      <Route  path='Construction' index element={<Construction />}/>
      <Route  path='Contact' index element={<Contact />} />
      <Route  path='Customize' index element={<Customize />} />
      <Route  path='Delivery' index element={<Delivery />} />
      <Route  path='FAQ' index element={<FAQ />}/>
      <Route  path='Kitchen' index element={<Kitchen />} />
      <Route  path='Office' index element={<Office />} />
      <Route  path='Paint' index element={<Paint />}/>
      <Route  path='SignIn' index element={<Authentication />}/>
      <Route  path='Shop' index element={<Shop />}/>
      <Route  path='Shwag' index element={<Shwag />}/>
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
