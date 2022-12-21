import { useState } from 'react';
import UpdateCommentPage from '../../pages/UpdateCommentPage/UpdateCommentPage';
import './CommentCard.css';

export default function CommentCard({ comment, handleUpdateComment, handleDeleteComment, user }) {
  const [showEditCommentForm, setShowEditCommentForm] = useState(false);
  const date = new Date(comment.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <div>{user._id === comment.user ? 
      <>
        {showEditCommentForm ? 
          <>
            <UpdateCommentPage comment={comment} handleUpdateComment={handleUpdateComment} showEditCommentForm={showEditCommentForm} setShowEditCommentForm={setShowEditCommentForm} />
            <button onClick={() => setShowEditCommentForm(!showEditCommentForm)}>Cancel</button>
            <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
          </>
        :
          <>
            <div>
              {comment.content}
            </div>
            <p>Posted by {comment.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
            <button onClick={() => setShowEditCommentForm(!showEditCommentForm)}>Edit</button>
            <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
          </>
        }
      </>
      :
      <>
        <div>
          {comment.content}
        </div>
        <p>Posted by {comment.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
      </>
    }
    </div>
  );
}