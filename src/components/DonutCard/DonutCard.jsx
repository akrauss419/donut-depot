import { Link, useNavigate } from 'react-router-dom';
import './DonutCard.css';

export default function DonutCard({ donut, handleDeleteDonut, user }) {
  const navigate = useNavigate();
  const date = new Date(donut.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <>
      <Link to={`/donuts/${donut._id}`}>
        <div>
          <h1>{donut.flavor}</h1>
          <p>Type: {donut.type}</p>
          <p>Available at {donut.shop}</p>
          <p>Added by {donut.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
        </div>
      </Link>
        <div>
          <button onClick={() => navigate(`/donuts/${donut._id}/update`)}>Edit Post</button>
          <button onClick={() => handleDeleteDonut(donut._id)}>Delete Donut</button>
        </div>
    </>
  );
}