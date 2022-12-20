import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateDonutPage({ donuts, handleUpdateDonut }) {
  const { donutId } = useParams();
  const changedDonut = donuts.find((d) => d._id === donutId);
  const [donutFormData, setDonutFormData] = useState(changedDonut);
  if (!changedDonut) return null;

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
      <h1>Edit Donut Post</h1>
      <form onSubmit={handleSubmitEdits}>
        <label htmlFor="input">Flavor:</label>
          <input
            name="flavor"
            type="text"
            value={donutFormData.flavor}
            onChange={handleChange}
            placeholder="Glazed, Chocolate, etc."
          />

          <label htmlFor="select">Type:</label>
          <select
            name="type"
            value={donutFormData.type}
            onChange={handleChange}
          >
            <option value="Dough">Dough</option>
            <option value="Cake">Cake</option>
          </select>

          <div
            value={donutFormData.sprinkles}
            onChange={handleChange}
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

          <label htmlFor="textarea">Other qualities:</label>
          <textarea
            name="unique"
            value={donutFormData.unique}
            onChange={handleChange}
            placeholder="What else makes this donut unique? (Special toppings, filling, etc.)"
          />

          <label htmlFor="input">Shop:</label>
          <input
            name="shop"
            type="text"
            value={donutFormData.shop}
            onChange={handleChange}
            placeholder="Who made this donut?"
          />

          <label htmlFor="textarea">Review:</label>
          <textarea
            name="review"
            value={donutFormData.review}
            onChange={handleChange}
            placeholder="Review this donut"
          />

          <label htmlFor="select">Rating:</label>
          <select
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
        <button type="submit">Submit Edits</button>
      </form>
    </>
  );
}