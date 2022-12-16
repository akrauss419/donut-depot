import { Link } from 'react-router-dom';

export default function DonutCard({ donut }) {
  const date = new Date(donut.createdAt);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'};
  
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