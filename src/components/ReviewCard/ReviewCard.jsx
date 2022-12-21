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
            <>
              <div>
                {review.content}
              </div>
              <h3>Rating: {review.rating}</h3>
              <p>Posted by {user.name} on {getDate(review.createdAt)}</p>
              <button onClick={() => setShowEditReviewForm(!showEditReviewForm)}>Edit</button>
              <button onClick={() => handleDeleteReview(review._id)}>Delete</button>
            </>
          }
        </>
        :
        <>
          <div>
            {review.content}
          </div>
          <h3>Rating: {review.rating}</h3>
          <p>Posted by {review.user} on {getDate(review.createdAt)}</p>
        </>
      }
    </div>
  );
}