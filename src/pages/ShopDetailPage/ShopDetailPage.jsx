import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

export default function ShopDetailPage({ shops, addReview }) {
  const [newReview, setNewReview] = useState({
    content: "",
    rating: 3
  });
  
  const { shopName } = useParams();
  const shop = shops.find((s) => s.name === shopName);

  const date = new Date(shop.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};

  const shopReviews = shop.reviews.map((review, idx) => (
    <ReviewCard review={review} key={idx} />
  ));
  
  function handleAddReview(evt) {
    evt.preventDefault();
    addReview(newReview, shop);
    setNewReview({
      content: "",
      rating: 3
    });
  }
  
  return(
    <>
      <h1>{shop.name} Details</h1>
      <div>
        <h4>{shop.location}</h4>
        <h6>Date Added: {date.toLocaleDateString(undefined, dateOptions)}</h6>
      </div>
      <h2>Reviews:</h2>
      <div>
        {shopReviews}
      </div>
      <h4>Review This Donut Shop:</h4>
      <div>
        <form onSubmit={handleAddReview}>
          <textarea
            name="content"
            value={newReview.content}
            onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
            placeholder="How were the donuts and your experience?"
            required
          />

          <label htmlFor="select">Rating:</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button type="submit">Post Review</button>
        </form>
      </div>
    </>
  );
}