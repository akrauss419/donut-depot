import { useState } from 'react';
import './UpdateReviewPage.css';

export default function UpdateReviewPage({ review, handleUpdateReview, showEditReviewForm, setShowEditReviewForm }) {
  const [reviewFormData, setReviewFormData] = useState({
    content: review.content,
    rating: review.rating
  });

  function handleChange(evt) {
    const updateReview = {...reviewFormData, [evt.target.name]: evt.target.value};
    setReviewFormData(updateReview);
  }

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    setShowEditReviewForm(!showEditReviewForm);
    handleUpdateReview(reviewFormData, review._id);
    console.log(reviewFormData);
  }

  return(
    <>
      <div className="ReviewFormContainer">
        <h4 className="EditReviewFormHeadline">Edit Review:</h4>
          <form onSubmit={handleSubmitEdits} className="ReviewForm">
            <textarea
              className="ReviewTextArea"
              name="content"
              value={reviewFormData.content}
              onChange={handleChange}
              placeholder="How were the donuts and your experience?"
            />

            <div className="ReviewRating">
              <label htmlFor="select">Rating:</label>
              <select
                className="ReviewSelect"
                name="rating"
                value={reviewFormData.rating}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <button type="submit">Submit Edits</button>
          </form>
      </div>
    </>
  );
}