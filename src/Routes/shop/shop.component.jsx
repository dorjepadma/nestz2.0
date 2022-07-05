import SHOP_DATA from '../../utils/Data/ShopData';


const Shop = () => {

  return (
    <div>
      {SHOP_DATA.map(({id, name}) => (
        <div key={id}>
          <hi>
            {name}
          </hi>
        </div>
        ))}
    </div>
  )
}
export default Shop;
