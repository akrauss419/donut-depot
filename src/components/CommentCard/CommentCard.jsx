import { useNavigate } from 'react-router-dom';
import './CommentCard.css';

export default function CommentCard({ comment, handleUpdateComment, handleDeleteComment }) {
  const navigate = useNavigate();
  const date = new Date(comment.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <div>
      <div>
        {comment.content}
      </div>
      <p>Posted by {comment.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
      <button onClick={() => navigate(`/comments/${comment._id}/update`)}>Edit</button>
      <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
    </div>
  );
}