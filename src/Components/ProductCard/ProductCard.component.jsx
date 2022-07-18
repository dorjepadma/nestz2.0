import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import { useNavigate, } from 'react-router-dom'

import './ProductCard.styles.scss';
import Button from '../Button/Button.component';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { name, price, imageUrl, linkUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  // const navigate = useNavigate();
  // const navigateLink = () => {
  //   // 👇️ navigate to /contacts
  //   navigate({linkUrl});
  // };

  return( 
  <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className='customButton'>
    <Button  buttonType='blue'
    // component={Link}
    // to={linkUrl}
    onClick={() => navigate(`${linkUrl}`)}

    >Read More</Button>
    </div>
    <div className='productFooter'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
    </div>
    <Button buttonType='inverted' onClick={addProductToCart}> Add to cart</Button>
  </div>
  )
}
export default ProductCard;
