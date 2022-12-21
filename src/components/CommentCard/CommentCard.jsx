import { useState } from 'react';
import UpdateCommentPage from '../../pages/UpdateCommentPage/UpdateCommentPage';
import './CommentCard.css';

export default function CommentCard({ comment, handleUpdateComment, handleDeleteComment, user }) {
  const [showEditCommentForm, setShowEditCommentForm] = useState(false);

  function getDate(item) {
    const date = new Date(item);
    return date.toDateString();
  }
  
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
            <p>Posted by {comment.user} on {getDate(comment.createdAt)}</p>
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
        <p>Posted by {comment.user} on {getDate(comment.createdAt)}</p>
      </>
    }
    </div>
  );
}