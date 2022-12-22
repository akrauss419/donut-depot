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
      {user._id === shop.user ?
        <div className="ShopCardDeck">
          <div className="ShopCard">
            <Link to={`/shops/${shop._id}`}>
              <div className="ShopCardDetails">
                <h1 className="ShopName">{shop.name}</h1>
                <p className="Location"><span className="LocationLabel">Location:</span> {shop.location}</p>
                <p>Added by <span class="UserName">{shop.userName}</span> on {getDate(shop.createdAt)}</p>
              </div>
            </Link>
              <div className="ShopButtonsContainer">
                <button onClick={() => navigate(`/shops/${shop._id}/update`)}>Edit Post</button>
                <button onClick={() => handleDeleteShop(shop._id)}>Delete Shop</button>
              </div>
          </div>
        </div>
        :
        <div className="ShopCardDeck">
          <div className="ShopCard">
            <Link to={`/shops/${shop._id}`}>
              <div className="ShopCardDetials">
                <h1 className="ShopName">{shop.name}</h1>
                <p>Location: {shop.location}</p>
                <p>Added by <span class="UserName">{shop.userName}</span> on {getDate(shop.createdAt)}</p>
              </div>
            </Link>
          </div>
        </div>
      }
    </>
  );
}