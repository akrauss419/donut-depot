import { useParams } from 'react-router-dom';

export default function DonutDetailPage({ donuts }) {
  const { donutFlavor } = useParams();
  const donut = donuts.find((d) => d.flavor === donutFlavor);

  const date = new Date(donut.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <div>
      <h1>{donut.flavor}</h1>
      <p>Type: {donut.type}</p>
      <p>Sprinkles: {donut.sprinkles}</p>
      <div>
        <h6>Other Qualities:</h6>
        {donut.unique}
      </div>
      <p>Home: {donut.shop}</p>
      <h4>Rating: {donut.rating}</h4>
      <div>
        <h5>Review:</h5>
        <p>{donut.review}</p>
      </div>
        <p>Date Added: {date.toLocaleDateString(undefined, dateOptions)}</p>
      <div>
        {donut.comments}
      </div>
    </div>
  );
}