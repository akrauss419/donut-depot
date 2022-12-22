import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as reviewsAPI from '../../utilities/reviews-api';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import './ShopDetailPage.css';

export default function ShopDetailPage({ shops, setShops, user}) {
  const [shopDetail, setShopDetail] = useState(null);
  const [newReview, setNewReview] = useState({
    content: "",
    rating: 3
  });

  const { shopId } = useParams();

  useEffect(() => {
    function setTable() {
      const shop = shops.find((s) => s._id === shopId);
      setShopDetail(shop);
    }
    setTable();
  }, [shopDetail])

  if (!shopDetail) return null;
  
  async function addReview(review, shop) {
    const allShops = await reviewsAPI.createReview(review, shop);
    setShops(allShops);
    const detail = allShops.find((s) => s._id === shopId);
    setShopDetail(detail);
  }

  async function handleUpdateReview(reviewFormData, id) {
    const allShops = await reviewsAPI.updateReview(reviewFormData, id);
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
      <div className="ShopDetailContainer">
        <div className="ShopDetail">
          <h1 className="ShopName">{shopDetail.name} Details</h1>
          <div className="ShopAttributes">
            <h2 className="ShopLocation">{shopDetail.location}</h2>
            <h4><span className="ShopTimestamp">Date Added:</span> {getDate(shopDetail.createdAt)}</h4>
          </div>
        </div>

        <h1 className="ReviewsHeadline">Reviews:</h1>
        <div>
          {shopDetail.reviews.length === 0 ? (<h1 className="NoReviews">No Reviews Yet</h1>) : shopDetail.reviews.map((review, idx) => (
            <ReviewCard shopDetail={shopDetail} review={review} key={review._id} handleUpdateReview={handleUpdateReview} handleDeleteReview={handleDeleteReview} user={user} />
          ))}
        </div>
          
        <div className="ReviewFormContainer">
          <h1 className="ReviewFormHeadline">Review This Donut Shop:</h1>
          <form onSubmit={handleAddReview} className="ReviewForm">
            <textarea
              className="ReviewTextArea"
              name="content"
              value={newReview.content}
              onChange={(evt) => setNewReview({ ...newReview, [evt.target.name]: evt.target.value })}
              placeholder="How were the donuts and your experience?"
              required
            />

            <div className="ReviewRating">
              <label htmlFor="select">Rating:</label>
              <select
                className="ReviewSelect"
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
            </div>

            <button type="submit">Post Review</button>
          </form>
        </div>
      </div>
    </>
  );
}