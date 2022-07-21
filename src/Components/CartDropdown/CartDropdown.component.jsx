import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

import { selectCartItems } from '../../Store/Cart/Cart.selector';

import { CartDropdownContainer, CartItems } from './CartDropdown.styles.jsx';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }
return (
  <CartDropdownContainer>
    <CartItems>
   {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </CartItems>
    <Button onClick={goToCheckout}>CHECKOUT</Button>
    </CartDropdownContainer>  
)
}

export default CartDropdown;
