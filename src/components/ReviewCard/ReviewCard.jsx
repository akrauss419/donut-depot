import './ReviewCard.css';

export default function ReviewCard({ review }) {
  const date = new Date(review.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <div>
      <div>
        {review.content}
      </div>
      <h3>Rating: {review.rating}</h3>
      <p>Posted by {review.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
    </div>
  );
}