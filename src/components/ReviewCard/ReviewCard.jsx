import { useState } from 'react';
import UpdateReviewPage from '../../pages/UpdateReviewPage/UpdateReviewPage';
import './ReviewCard.css';

export default function ReviewCard({ review, handleUpdateReview, handleDeleteReview, user }) {
  const [showEditReviewForm, setShowEditReviewForm] = useState(false);
  
  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <div>
      {user._id === review.user ?
        <>
          {showEditReviewForm ?
            <>
              <UpdateReviewPage review={review} handleUpdateReview={handleUpdateReview} showEditReviewForm={showEditReviewForm} setShowEditReviewForm={setShowEditReviewForm} />
              <button onClick={() => setShowEditReviewForm(!showEditReviewForm)}>Cancel</button>
              <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
            </>
          :
            <div className="ReviewCardContainer">
              <div className="ReviewCard">
                <div className="ReviewBackground">
                  <p className="ReviewContent">{review.content}</p>
                </div>
                <div>
                  <h1>Rating: {review.rating} ⭐️</h1>
                  <p className="ReviewTimestamp">Posted by <span className="UserName">{review.userName}</span> on {getDate(review.createdAt)}</p>
                </div>
                <div className="ReviewActionButtons">
                  <button onClick={() => setShowEditReviewForm(!showEditReviewForm)}>Edit</button>
                  <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
                </div>
              </div>
            </div>
          }
        </>
        :
        <div className="ReviewCardContainer">
          <div className="ReviewCard">
            <p className="ReviewContent">{review.content}</p>
          </div>
          <div>
            <h1>Rating: {review.rating} ⭐️</h1>
            <p className="ReviewTimestamp">Posted by <span className="UserName">{review.userName}</span> on {getDate(review.createdAt)}</p>
          </div>
        </div>
      }
    </div>
  );
}