import { Link, useNavigate } from 'react-router-dom';
import './ShopCard.css';

export default function ShopCard({ shop, handleDeleteShop, user }) {
  const navigate = useNavigate();

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
    <Link to={`/shops/${shop._id}`}>
      <div>
        <h1>{shop.name}</h1>
        <p>Location: {shop.location}</p>
        <p>Added by {user.name} on {getDate(shop.createdAt)}</p>
      </div>
    </Link>
      <div>
        <button onClick={() => navigate(`/shops/${shop._id}/update`)}>Edit Post</button>
        <button onClick={() => handleDeleteShop(shop._id)}>Delete Shop</button>
      </div>
    </>
  );
}