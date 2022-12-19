import './CommentCard.css';

export default function CommentCard({ comment, handleDeleteComment }) {
  const date = new Date(comment.createdAt);
  const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
  return(
    <div>
      <div>
        {comment.content}
      </div>
      <p>Posted by {comment.user} on {date.toLocaleDateString(undefined, dateOptions)}</p>
      <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
    </div>
  );
}