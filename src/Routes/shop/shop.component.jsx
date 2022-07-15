import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../Context/categories.context';
import ProductCard from '../../Components/ProductCard/ProductCard.component';

import './shop.styles.scss';



const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
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
  )
}
export default Shop;
