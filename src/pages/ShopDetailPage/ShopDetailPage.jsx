import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as reviewsAPI from '../../utilities/reviews-api';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './ShopDetailPage.css';

export default function ShopDetailPage({ shops, setShops, user}) {
  const [shopDetail, setShopDetail] = useState(null);
  const [newReview, setNewReview] = useState({
    content: "",
    rating: 3
  });
  
  const navigate = useNavigate();

  const { shopId } = useParams();

  useEffect(() => {
    function setTable() {
      const shop = shops.find((s) => s._id === shopId);
      setShopDetail(shop);
    }
    setTable();
  }, [shopDetail])

  if (!shopDetail) return null;

  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  async function addReview(review, shop) {
    const allShops = await reviewsAPI.createReview(review, shop);
    setShops(allShops);
    const detail = allShops.find((s) => s._id === shopId);
    setShopDetail(detail);
  }

  async function handleDeleteReview(id) {
    const allShops = await reviewsAPI.deleteReview(id)
    setShops(allShops);
    const detail = allShops.find((s) => s._id === shopId);
    setShopDetail(detail);
  }

  function handleAddReview(evt) {
    evt.preventDefault();
    addReview(newReview, shopDetail);
    setNewReview({
      content: "",
      rating: 3
    });
  }

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      <h1>{shopDetail.name} Details</h1>
      <div>
        <h4>{shopDetail.location}</h4>
        <h6>Date Added: {getDate(shopDetail.createdAt)}</h6>
      </div>
      <h2>Reviews:</h2>
      <div>
        {shopDetail.reviews.length === 0 ? (<h3>No Reviews Yet</h3>) : shopDetail.reviews.map((review, idx) => (
          <ReviewCard review={review} key={idx} handleDeleteReview={handleDeleteReview} user={user} />
        ))}
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