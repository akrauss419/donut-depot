import ShopCard from '../../components/ShopCard/ShopCard';
import './ShopsListPage.css';

export default function ShopsListPage({ shops }) {
  return(
    <>
      <h1>Explore Donut Shops</h1>
      <div>
        {shops.map((s, idx) => {
          return <ShopCard shop={s} key={idx} />;
        })}
      </div>
    </>
  );
}