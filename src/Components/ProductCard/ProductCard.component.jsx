import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, } from 'react-router-dom'

import { selectCartItems } from '../../Store/Cart/Cart.selector';
import { addItemToCart } from '../../Store/Cart/Cart.actions';

import './ProductCard.styles.scss';
import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button.component';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { name, price, imageUrl, linkUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

// Price is disabled, reactivate when ready to sell, also reactive in Shopping Cart
// Cart and Checkout deactivated, reactive when ready to sell, also reactivate in Navbar
  return( 
  <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='customButton'>
    <Button  buttonType='blue'

    onClick={() => navigate(`${linkUrl}`)}

    >Read More</Button>
    </div>
    <div className='productFooter'>
      <span className='name'>{name}</span>
      <span className='price'>
        {/* ${price} */}
        Call for Price
        </span>
    </div>
    {/* <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}> Add to cart</Button> */}
  </div>
  )
}
export default ProductCard;
