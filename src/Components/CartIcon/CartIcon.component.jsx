import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../Store/Cart/Cart.selector';
import { setIsCartOpen } from '../../Store/Cart/Cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './CartIcon.styles';


const CartIcon = () => {
  const dispatch = useDispatch();

 const cartCount = useSelector(selectCartCount);
 const isCartOpen = useSelector(selectIsCartOpen);

const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )

}

export default CartIcon;
