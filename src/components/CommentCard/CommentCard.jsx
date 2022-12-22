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
          <div className="CommentCardContainer">
            <div className="CommentCard">
              <p className="CommentContent">{comment.content}</p>
              <p className="CommentTimestamp">Posted by <span className="UserName">{user.name}</span> on {getDate(comment.createdAt)}</p>
              <div className="CommentActionButtons">
                <button onClick={() => setShowEditCommentForm(!showEditCommentForm)}>Edit</button>
                <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
              </div>
            </div>
          </div>
        }
      </>
      :
      <div className="CommentCardContainer">
        <div className="CommentCard">
          <p className="CommentContent">{comment.content}</p>
        </div>
        <p className="CommentTimestamp">Posted by <span className="UserName">{user.name}</span> on {getDate(comment.createdAt)}</p>
      </div>
    }
    </div>
  );
}