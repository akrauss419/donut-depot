import { Link } from 'react-router-dom';
import './ShopCard.css';

export default function ShopCard({ shop }) {
  const date = new Date(shop.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <Link to={`/shops/${shop.name}`}>
      <div>
        <h1>{shop.name}</h1>
        <p>Location: {shop.location}</p>
        <p>Added by {shop.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
    </Link>
  );
}