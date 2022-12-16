import { useParams } from 'react-router-dom';

export default function ShopDetailPage({ shops }) {
  const { shopName } = useParams();
  const shop = shops.find((s) => s.name === shopName);

  const date = new Date(shop.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <>
      <h1>{shop.name} Details</h1>
      <div>
        <h4>{shop.location}</h4>
        <h6>Date Added: {date.toLocaleDateString(undefined, dateOptions)}</h6>
      </div>
      <div>
        <h2>Shop Reviews:</h2>
        <div>{shop.reviews}</div>
      </div>
    </>
  );
}