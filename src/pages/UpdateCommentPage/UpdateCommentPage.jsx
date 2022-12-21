import { useState } from 'react';

export default function UpdateCommentPage({ comment, handleUpdateComment, showEditCommentForm, setShowEditCommentForm }) {
  const [commentFormData, setCommentFormData] = useState({content: comment.content});

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    setShowEditCommentForm(!showEditCommentForm);
    handleUpdateComment(commentFormData, comment._id);
  }

  return(
    <>
      <h2>Edit Comment:</h2>
        <div>
          <form onSubmit={handleSubmitEdits}>
            <textarea
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