import { useState } from 'react';
import './NewDonutPage.css';

export default function NewDonutPage({ addDonut }) {
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

        <label htmlFor="textarea">Other qualities:</label>
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
    </>
  );
}