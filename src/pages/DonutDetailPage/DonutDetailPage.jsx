import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as commentsAPI from '../../utilities/comments-api';
import CommentCard from '../../components/CommentCard/CommentCard';
import './DonutDetailPage.css';

export default function DonutDetailPage({ donuts, setDonuts, user }) {
  const [donutDetail, setDonutDetail] = useState(null);
  const [newComment, setNewComment] = useState({
    content: "",
  });
  // const [title, setTitle] = useState('');
  // const [photos, setPhotos] = useState([]);

  // const fileInputRef = useRef();
  
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

  // async function handleUpload() {
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('photo', fileInputRef.current.files[0]);
  //   const newPhoto = await photosAPI.upload(formData);
  //   setPhotos([newPhoto, ...photos]);
  //   setTitle('');
  //   fileInputRef.current.value = '';
  // }

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
  return(
    <>
      <div>
        <h1>{donutDetail.flavor}</h1>
        <p>Type: {donutDetail.type}</p>
        <p>Sprinkles: {donutDetail.sprinkles}</p>
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
        <p>Home: {donutDetail.shop}</p>
        <h4>Rating: {donutDetail.rating}</h4>
        <div>
          <h5>Review:</h5>
          <p>{donutDetail.review}</p>
        </div>
        <p>Date Added: {getDate(donutDetail.createdAt)}</p>

      </div>
      <h2>Comments:</h2>
      <div>
        {donutDetail.comments.length === 0 ? (<h3>No Comments Yet</h3>) : donutDetail.comments.map((comment) => (
          <CommentCard donutDetail={donutDetail} comment={comment} key={comment._id} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} user={user} />
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