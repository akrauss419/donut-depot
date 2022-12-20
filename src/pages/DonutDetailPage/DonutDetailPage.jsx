import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';
import './DonutDetailPage.css';

export default function DonutDetailPage({ donuts, addComment, handleUpdateComment, handleDeleteComment }) {
  const [newComment, setNewComment] = useState({
    content: "",
  });
  
  const { donutId } = useParams();
  const donut = donuts.find((d) => d._id === donutId);

  const date = new Date(donut.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  function handleAddComment(evt) {
    evt.preventDefault();
    addComment(newComment, donut);
    setNewComment({
      content: ""
    });
  }
  
  return(
    <>
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
      </div>
      <h2>Comments:</h2>
      <div>
        {donut.comments.length === 0 ? (<h3>No Comments Yet</h3>) : donut.comments.map((comment, idx) => (
          <CommentCard donuts={donuts} comment={comment} key={idx} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} />
        ))}
      </div>
      <h4>Comment on This Donut:</h4>
      <div>
        <form onSubmit={handleAddComment}>
          <textarea
            name="content"
            value={newComment.content}
            onChange={(evt) => setNewComment({ content: evt.target.value })}
            placeholder="What are your thoughts?"
            required
          />
          <button type="submit">Enrich Dialogue</button>
        </form>
      </div>
    </>
  );
}