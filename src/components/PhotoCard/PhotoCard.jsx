import './PhotoCard.css';

export default function PhotoCard({ photo }) {
  return(
    <div>
      <img className="images" src={photo.url} alt={photo.title} />
      <h5>{photo.title}</h5>
    </div>
  );
}