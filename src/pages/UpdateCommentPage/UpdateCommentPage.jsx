import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateCommentPage({ comments, handleUpdateComment }) {
  const { id } = useParams();
  const changedComment = comments.find((c) => c._id === id);
  const [commentFormData, setCommentFormData] = useState(changedComment);
  if (!changedComment) return null;

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    handleUpdateComment(commentFormData, id);
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