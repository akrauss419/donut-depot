import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as photosAPI from '../../utilities/photos-api';
import './DonutCard.css';

export default function DonutCard({ donut, handleDeleteDonut, user }) {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      {user._id === donut.user ?
        <div className="DonutCardDeck">
          <div className="DonutCard">
            <Link to={`/donuts/${donut._id}`}>
              <div>
                <img className="Images" src={donut.url} />
              </div>
              <div className="DonutCardDetails">
                <h1 className="DonutFlavor">{donut.flavor}</h1>
                <h3>Available at {donut.shop}</h3>
                <p>Added by <span class="UserName">{donut.userName}</span> on {getDate(donut.createdAt)}</p>
              </div>
            </Link>
              <div className="DonutButtonsContainter">
                <button onClick={() => navigate(`/donuts/${donut._id}/update`)}>Edit Post</button>
                <button onClick={() => handleDeleteDonut(donut._id)}>Delete Donut</button>
              </div>
          </div>
        </div>
        :  
        <div className="DonutCardDeck">
          <div className="DonutCard">
            <Link to={`/donuts/${donut._id}`}>
              <div>
                <img className="Images" src={donut.url} />
              </div>
              <div className="DonutCardDetails">
                <h1 className="DonutFlavor">{donut.flavor}</h1>
                <h3>Available at {donut.shop}</h3>
                <p>Added by <span class="UserName">{donut.userName}</span> on {getDate(donut.createdAt)}</p>
              </div>
            </Link>
          </div>
        </div>
      }
    </>
  );
}