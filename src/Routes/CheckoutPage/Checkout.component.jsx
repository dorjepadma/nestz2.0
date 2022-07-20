import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import CheckoutItem  from '../../Components/CheckoutItem/CheckoutItem.component';
import PaymentForm from '../../Components/PaymentForm/PaymentForm.component';


import './Checkout.styles.scss';


const Checkout = () => {
  const { cartItems, 
          cartTotal
    // addItemToCart, 
    // removeItemFromCart 
  } = useContext(CartContext);
 return (
  <div className="checkout-container">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span >Remove</span>
      </div>
    </div>
  
    {cartItems.map((cartItem) => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
    )}
   
    <span className='total' >${cartTotal}</span>
    <PaymentForm />
  </div>
 );
};

export default Checkout;