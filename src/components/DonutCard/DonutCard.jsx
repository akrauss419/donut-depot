import { Link, useNavigate } from 'react-router-dom';
import './DonutCard.css';

export default function DonutCard({ donut, handleDeleteDonut }) {
  const navigate = useNavigate();

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      <Link to={`/donuts/${donut._id}`}>
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