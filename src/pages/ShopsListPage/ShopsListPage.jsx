import { useNavigate } from 'react-router-dom';
import * as shopsAPI from '../../utilities/shops-api';
import ShopCard from '../../components/ShopCard/ShopCard';
import './ShopsListPage.css';

export default function ShopsListPage({ shops, setShops, user }) {
  const navigate = useNavigate();

  async function handleUpdateShop(shopFormData, shopId) {
    await shopsAPI.updateShop(shopFormData, shopId);
    const updatedShops = await shopsAPI.index();
    setShops(updatedShops);
    navigate(`/shops/${shopId}`);
  }

  async function handleDeleteShop(id) {
    await shopsAPI.deleteShop(id);
    const remainingShops = shops.filter(shop => shop._id !== id);
    setShops(remainingShops);
  }

  return(
    <>
      <h1 className="ShopListHeadline">Explore Donut Shops</h1>
      <div className="ShopList">
        {shops.map((s, idx) => {
          return <ShopCard shop={s} key={idx} handleUpdateShop={handleUpdateShop} handleDeleteShop={handleDeleteShop} user={user} />;
        })}
      </div>
    </>
  );
}