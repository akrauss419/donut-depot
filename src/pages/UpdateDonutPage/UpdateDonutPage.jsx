import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as donutsAPI from '../../utilities/donuts-api';
import './UpdateDonutPage.css';

export default function UpdateDonutPage({ donuts, setDonuts }) {
  const navigate = useNavigate();
  const { donutId } = useParams();
  const changedDonut = donuts.find((d) => d._id === donutId);
  const [donutFormData, setDonutFormData] = useState(changedDonut);
  if (!changedDonut) return null;

  async function handleUpdateDonut(donutFormData, donutId) {
    await donutsAPI.updateDonut(donutFormData, donutId);
    const updatedDonuts = await donutsAPI.index();
    setDonuts(updatedDonuts);
    navigate(`/donuts/${donutId}`);
  }

  function handleChange(evt) {
    const updateDonut = {...donutFormData, [evt.target.name]: evt.target.value};
    setDonutFormData(updateDonut);
  }

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    handleUpdateDonut(donutFormData, donutId);
  }

  return(
    <>
      <h1 className="EditDonutFormHeadline">Edit Donut Post</h1>
      <div className="ContainerContainer">
        <div className="EditDonutFormContainer">
          <form onSubmit={handleSubmitEdits} className="DonutForm">
            <div className="FlavorInput">
              <label htmlFor="input" className="FlavorLabel">Flavor:</label>
              <input
                name="flavor"
                type="text"
                value={donutFormData.flavor}
                onChange={handleChange}
                placeholder="Glazed, Chocolate, etc."
              />
            </div>

            <div className="TypeInput">
              <label htmlFor="select" className="TypeLabel">Type:</label>
              <select
                className="DonutFormSelect"
                name="type"
                value={donutFormData.type}
                onChange={handleChange}
              >
                <option value="Dough">Dough</option>
                <option value="Cake">Cake</option>
              </select>
            </div>

            <div
              className="SprinklesInput"
              value={donutFormData.sprinkles}
              onChange={handleChange}
            >
              <label htmlFor="radio" className="SprinklesLabel">Sprinkles:</label>
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

            <div className="QualitiesInput">
              <label htmlFor="textarea" className="QualitiesLabel">Other qualities:</label>
              <textarea
                className="DonutFormTextArea"
                name="unique"
                value={donutFormData.unique}
                onChange={handleChange}
                placeholder="What else makes this donut unique? (Special toppings, filling, etc.)"
              />
            </div>

            <div className="ShopInput">
              <label htmlFor="input" className="ShopLabel">Shop:</label>
              <input
                name="shop"
                type="text"
                value={donutFormData.shop}
                onChange={handleChange}
                placeholder="Who made this donut?"
              />
            </div>

            <div className="ReviewInput">
              <label htmlFor="textarea" className="ReviewLabel">Review:</label>
              <textarea
                className="DonutFormTextArea"
                name="review"
                value={donutFormData.review}
                onChange={handleChange}
                placeholder="Review this donut"
              />
            </div>

            <div className="RatingInput">
              <label htmlFor="select" className="RatingLabel">Rating:</label>
              <select
                className="DonutFormSelect"
                name="rating"
                value={donutFormData.rating}
                onChange={handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            
            <div className="EditDonutButtonContainer">
              <button type="submit">Submit Edits</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}