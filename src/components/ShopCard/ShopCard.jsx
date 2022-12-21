import { Link, useNavigate } from 'react-router-dom';
import './ShopCard.css';

export default function ShopCard({ shop, reviews, handleDeleteShop }) {
  const navigate = useNavigate();
  const date = new Date(shop.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <>
    <Link to={`/shops/${shop._id}`}>
      <div>
        <h1>{shop.name}</h1>
        <p>Location: {shop.location}</p>
        <p>Added by {shop.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
    </Link>
      <div>
        <button onClick={() => navigate(`/shops/${shop._id}/update`)}>Edit Post</button>
        <button onClick={() => handleDeleteShop(shop._id)}>Delete Shop</button>
      </div>
    </>
  );
}