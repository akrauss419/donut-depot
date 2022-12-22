import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as commentsAPI from '../../utilities/comments-api';
import CommentCard from '../../components/CommentCard/CommentCard';
import './DonutDetailPage.css';

export default function DonutDetailPage({ donuts, setDonuts, user }) {
  const [donutDetail, setDonutDetail] = useState(null);
  const [newComment, setNewComment] = useState({
    content: "",
  });
  
  const { donutId } = useParams();
  
  useEffect(() => {
    function getDonut() {
      const donut = donuts.find((d) => d._id === donutId);
      setDonutDetail(donut);
    }
    getDonut();
  }, [donutDetail])
  
  if (!donutDetail) return null;

  async function addComment(comment, donut) {
    const allDonuts = await commentsAPI.createComment(comment, donut);
    setDonuts(allDonuts);
    const detail = allDonuts.find((d) => d._id === donutId);
    setDonutDetail(detail);
  }

  async function handleUpdateComment(commentFormData, id) {
    const allDonuts = await commentsAPI.updateComment(commentFormData, id);
    setDonuts(allDonuts);
    const detail = allDonuts.find((d) => d._id === donutId);
    setDonutDetail(detail);
  }

  async function handleDeleteComment(id) {
    const allDonuts = await commentsAPI.deleteComment(id);
    setDonuts(allDonuts);
    const detail = allDonuts.find((d) => d._id === donutId);
    setDonutDetail(detail);
  }
  
  function handleAddComment(evt) {
    evt.preventDefault();
    addComment(newComment, donutDetail);
    setNewComment({
      content: ""
    });
  }

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      <div className="DonutDetailContainer"> 
        <div className="DonutDetail">
          <img className="DetailImage" src={donutDetail.url} alt="" />
          <h1 className="DonutFlavor">{donutDetail.flavor}</h1>
          <h2>Home: {donutDetail.shop}</h2>
          <div className="DonutTraits">
            <h3>Type: {donutDetail.type}</h3>
            <h3>Sprinkles: {donutDetail.sprinkles}</h3>
          </div>
          <div>
            {donutDetail.unique.length === 0 ? 
              null
            : 
              <div>
                <h6>Other Qualities:</h6>
                <div>{donutDetail.unique}</div>
              </div>
            }
          </div>
          <h1>Rating: {donutDetail.rating}⭐️</h1>
          <div className="DonutReview">
            <h1>Review:</h1>
            <p className="ReviewContent">{donutDetail.review}</p>
          </div>
          <h3 className="Timestamp">Date Added: {getDate(donutDetail.createdAt)}</h3>
        </div>
      </div>

      <div className="CommentsHeadline">
        <h1>C</h1><h3 className="DonutEmoji">🍩</h3><h1>mments:</h1>
      </div>
      <div>
        {donutDetail.comments.length === 0 ? (<h1 className="NoComments">No Comments Yet</h1>) : donutDetail.comments.map((comment) => (
          <CommentCard donutDetail={donutDetail} comment={comment} key={comment._id} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} user={user} />
        ))}
      </div>

      <div className="CommentFormContainer">
        <h1 className="CommentFormHeadline">Comment on This Donut:</h1>
        <form onSubmit={handleAddComment} className="CommentForm">
          <textarea
            className="CommentTextArea"
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