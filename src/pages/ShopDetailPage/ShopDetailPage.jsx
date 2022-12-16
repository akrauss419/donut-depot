import { useParams } from 'react-router-dom';

export default function ShopDetailPage({ shops }) {
  const { shopName } = useParams();

  const shop = shops.find((s) => s.name === shopName);
  
  return(
    <>
      <h1>{shop.name} Details</h1>
      <div>
        <h4>{shop.location}</h4>
      </div>
      <div>
        <h2>Shop Reviews:</h2>
        <div>{shop.reviews}</div>
      </div>
    </>
  );
}