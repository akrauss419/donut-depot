import { useState, useRef } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import './NewDonutPage.css';

export default function NewDonutPage({ addDonut }) {
  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  const [newDonut, setNewDonut] = useState({
    flavor: "",
    type: "Dough",
    sprinkles: "No",
    unique: "",
    shop: "",
    review: "",
    rating: 3,
    favorite: false,
  });

  const fileInputRef = useRef();

  async function handleUpload() {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    setTitle('');
    fileInputRef.current.value = '';
  }
  
  function handleAddDonut(evt) {
    evt.preventDefault();
    addDonut(newDonut);
    setNewDonut({
      flavor: "",
      type: "Dough",
      sprinkles: "No",
      unique: "",
      shop: "",
      review: "",
      rating: 3,
      favorite: false,
    });
  }

  return (
    <>
      <h1>Add a New Donut</h1>
      <form onSubmit={handleAddDonut}>
        <label htmlFor="input">Flavor:</label>
        <input
          name="flavor"
          type="text"
          value={newDonut.flavor}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
          placeholder="Glazed, Chocolate, etc."
          required
        />

        <label htmlFor="select">Type:</label>
        <select
          name="type"
          value={newDonut.type}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
          required
        >
          <option value="Dough">Dough</option>
          <option value="Cake">Cake</option>
        </select>

        <div
          value={newDonut.sprinkles}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
        >
          <label htmlFor="radio">Sprinkles:</label>
          <label htmlFor="radio">Yes</label>
          <input 
            name="sprinkles"
            type="radio"
            value="Yes"
            id="Yes"
          />
          <label htmlFor="radio">No</label>
          <input 
            name="sprinkles"
            type="radio"
            value="No"
            id="No"
            defaultChecked
          />
        </div>

        <label htmlFor="textarea">Other Qualities:</label>
        <textarea
          name="unique"
          value={newDonut.unique}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
          placeholder="What else makes this donut unique? (Special toppings, filling, etc.)"
        />

        <label htmlFor="input">Shop:</label>
        <input
          name="shop"
          type="text"
          value={newDonut.shop}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
          placeholder="Who made this donut?"
          required
        />

        <label htmlFor="textarea">Review:</label>
        <textarea
          name="review"
          value={newDonut.review}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
          placeholder="Review this donut"
          required
        />

        <label htmlFor="select">Rating:</label>
        <select
          name="rating"
          value={newDonut.rating}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Add to Donut Case</button>
      </form>
      <div>
        <label htmlFor="file">Show Us Your Donut:</label>
        <input type="file" ref={fileInputRef} />
        <input
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          placeholder="Photo Title"
        />
        <button onClick={handleUpload}>Upload Photo</button>
      </div>
    </>
  );
}