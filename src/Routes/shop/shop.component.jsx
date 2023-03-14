import { useEffect } from 'react';
// import { Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../Store/Categories/Category.selector';

import { getCategoriesAndDocuments } from '../../utils/Firebase/firebase.utils';
import { setCategories } from '../../Store/Categories/Category.action';

import ProductCard from '../../Components/ProductCard/ProductCard.component';

import { NavigationContainer, 
  HeaderLogo, 
  NavBarLinkContainer, 
  LeftContainer, 
  RightContainer, 
  NavBarInnerContainer, 
  NavBarExtendedContainer, 
  NavBarLink, 
  SignOutDiv, 
  OpenLinksButton, 
  NavBarLinkExtended } from '../Navigation/Navigation.styles';
import './shop.styles.scss';


const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
  }, [dispatch]);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div>
      <div className='shopBanner'> 
      < NavBarLink  to='/Contact' >Call or Email for Pricing</ NavBarLink>
      </div>
    <div className='shopPage'>
      {Object.keys(categoriesMap).map((title) => (
        <div className='shopTitle'>
          <h2>{title}</h2>
        <div className='products-container'>
          {categoriesMap[title].map((product) => (
          <ProductCard key={product.id} product={product}/>
            ))}
        </div>
      </div>
        ))}
      </div>
    
    </div>
  )
}
export default Shop;
