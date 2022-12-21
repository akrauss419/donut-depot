import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../PhotoCard/PhotoCard';
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
      <Link to={`/donuts/${donut._id}`}>
        <div>
          {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
        </div>
        <div>
          <h1>{donut.flavor}</h1>
          <p>Type: {donut.type}</p>
          <p>Available at {donut.shop}</p>
          <p>Added by {donut.user} on {getDate(donut.createdAt)}</p>
        </div>
      </Link>
        <div>
          <button onClick={() => navigate(`/donuts/${donut._id}/update`)}>Edit Post</button>
          <button onClick={() => handleDeleteDonut(donut._id)}>Delete Donut</button>
        </div>
    </>
  );
}