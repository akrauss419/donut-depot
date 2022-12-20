import ShopCard from '../../components/ShopCard/ShopCard';
import './ShopsListPage.css';

export default function ShopsListPage({ shops, handleUpdateShop, handleDeleteShop }) {
  return(
    <>
      <h1>Explore Donut Shops</h1>
      <div>
        {shops.map((s, idx) => {
          return <ShopCard shop={s} key={idx} handleUpdateShop={handleUpdateShop} handleDeleteShop={handleDeleteShop} />;
        })}
      </div>
    </>
  );
}