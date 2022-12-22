import { useState } from 'react';
import './UpdateCommentPage.css';

export default function UpdateCommentPage({ comment, handleUpdateComment, showEditCommentForm, setShowEditCommentForm }) {
  const [commentFormData, setCommentFormData] = useState({content: comment.content});

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    setShowEditCommentForm(!showEditCommentForm);
    handleUpdateComment(commentFormData, comment._id);
  }

  return(
    <>
      <div className="CommentFormContainer">
        <h1 className="EditCommentFormHeadline">Edit Comment:</h1>
            <form onSubmit={handleSubmitEdits} className="CommentForm">
              <textarea
                className="CommentTextArea"
                name="content"
                value={commentFormData.content}
                onChange={(evt) => setCommentFormData({ content: evt.target.value })}
                placeholder="What are your thoughts?"
              />
              <button type="submit">Submit Edits</button>
            </form>
      </div>
    </>
  );
}