import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as donutsAPI from '../../utilities/donuts-api';
import './NewDonutPage.css';

export default function NewDonutPage({ donuts, setDonuts, addDonut }) {
  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState(null);
  const [newDonut, setNewDonut] = useState({
    flavor: "",
    type: "Dough",
    sprinkles: "No",
    unique: "",
    shop: "",
    review: "",
    rating: 3,
    url: "",
    favorite: false,
  });

  const fileInputRef = useRef();

  const navigate = useNavigate();
  
  async function handleAddDonut(evt) {
    evt.preventDefault();
    try {
      if (fileInputRef.current.value === '') return;
      const formData = new FormData()
      formData.append('photo', fileInputRef.current.files[0]);
      formData.append('name', title);
      let newPhoto = await donutsAPI.upload(formData);
      fileInputRef.current.value = '';
      newDonut.url = newPhoto.url;
      const allDonuts = await donutsAPI.create(newDonut);
      setDonuts(allDonuts);
      setNewDonut({
        flavor: "",
        type: "Dough",
        sprinkles: "No",
        unique: "",
        shop: "",
        review: "",
        rating: 3,
        url: ""
      })
      navigate('/donuts');
    } catch {
      return 'Validation Failed';
    }
  }

  return (
    <>
      <h1 className="DonutFormHeadline">Add a New Donut</h1>
      <div className="ContainerContainer">
        <div className="DonutFormContainer">
          <form onSubmit={handleAddDonut} className="DonutForm">
            <div className="FlavorInput">
              <label htmlFor="input" className="FlavorLabel">Flavor:</label>
              <input
                name="flavor"
                type="text"
                value={newDonut.flavor}
                onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
                placeholder="Glazed, Chocolate, etc."
                required
              />
            </div>

            <div className="TypeInput">
              <label htmlFor="select" className="TypeLabel">Type:</label>
              <select
                className="DonutFormSelect"
                name="type"
                value={newDonut.type}
                onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
                required
              >
                <option value="Dough">Dough</option>
                <option value="Cake">Cake</option>
              </select>
            </div>

            <div
              className="SprinklesInput"
              value={newDonut.sprinkles}
              onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
            >
              <label htmlFor="radio" className="SprinklesLabel">Sprinkles:</label>
              <div>
                <label htmlFor="radio">Yes</label>
                <input 
                  name="sprinkles"
                  type="radio"
                  value="Yes"
                  id="Yes"
                />
              </div>
              <div>
                <label htmlFor="radio">No</label>
                <input 
                  name="sprinkles"
                  type="radio"
                  value="No"
                  id="No"
                  defaultChecked
                />
              </div>
            </div>

            <div className="QualitiesInput">
              <label htmlFor="textarea" className="QualitiesLabel">Other Qualities:</label>
              <textarea
                className="DonutFormTextArea"
                name="unique"
                value={newDonut.unique}
                onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
                placeholder="What else makes this donut unique? (Special toppings, filling, etc.)"
              />
            </div>

            <div className="ShopInput">
              <label htmlFor="input" className="ShopLabel">Shop:</label>
              <input
                name="shop"
                type="text"
                value={newDonut.shop}
                onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
                placeholder="Who made this donut?"
                required
              />
            </div>

            <div className="ReviewInput">
              <label htmlFor="textarea" className="ReviewLabel">Review:</label>
              <textarea
                className="DonutFormTextArea"
                name="review"
                value={newDonut.review}
                onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
                placeholder="Review this donut"
                required
              />
            </div>

            <div className="RatingInput">
              <label htmlFor="select" className="RatingLabel">Rating:</label>
              <select
                className="DonutFormSelect"
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
            </div>

            <div className="PhotoUploadContainer">
              <label htmlFor="file">Show Us Your Donut:</label>
              <div className="PhotoInputs">
                <input name="title" type="text" onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" required />
                <input type="file" ref={fileInputRef} required />
              </div>
            </div>

            <div className="AddDonutButtonContainer">
              <button type="submit" className="AddDonutButton">Add to Donut Case</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}