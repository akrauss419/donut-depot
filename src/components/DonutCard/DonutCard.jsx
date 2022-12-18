import { Link } from 'react-router-dom';
import './DonutCard.css';

export default function DonutCard({ donut }) {
  const date = new Date(donut.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <Link to={`/donuts/${donut.flavor}`}>
      <div>
        <h1>{donut.flavor}</h1>
        <p>Type: {donut.type}</p>
        <p>Available at {donut.shop}</p>
        <p>Added by {donut.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
    </Link>
  );
}