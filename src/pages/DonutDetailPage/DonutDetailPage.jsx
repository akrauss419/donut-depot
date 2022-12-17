import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';

export default function DonutDetailPage({ donuts, addComment }) {
  const [newComment, setNewComment] = useState({
    content: "",
  });
  
  const { donutFlavor } = useParams();
  const donut = donuts.find((d) => d.flavor === donutFlavor);

  const date = new Date(donut.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};

  const donutComments = donut.comments.map((comment, idx) => (
    <CommentCard comment={comment} key={idx} />
  ));
  
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
        {donutComments}
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