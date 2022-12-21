import { useState } from 'react';

export default function UpdateReviewPage({ review, handleUpdateReview, showEditReviewForm, setShowEditReviewForm }) {
  const [reviewFormData, setReviewFormData] = useState({content: review.content});

  function handleChange(evt) {
    const updateReview = {...reviewFormData, [evt.target.name]: evt.target.value};
    setReviewFormData(updateReview);
  }

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    setShowEditReviewForm(!showEditReviewForm);
    handleUpdateReview(reviewFormData, review._id);
  }

  return(
    <>
      <h4>Edit Review:</h4>
      <div>
        <form onSubmit={handleSubmitEdits}>
          <textarea
            name="content"
            value={reviewFormData.content}
            onChange={handleChange}
            placeholder="How were the donuts and your experience?"
          />

          <label htmlFor="select">Rating:</label>
          <select
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

          <button type="submit">Submit Edits</button>
        </form>
      </div>
    </>
  );
}