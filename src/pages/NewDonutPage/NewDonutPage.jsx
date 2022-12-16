import { useState } from 'react';

export default function NewDonutPage({ addDonut }) {
  const [newDonut, setNewDonut] = useState({
    flavor: "",
    type: "",
    sprinkles: false,
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
      type: "",
      sprinkles: false,
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
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
        >
          <option value={newDonut.type}>Dough</option>
          <option value={newDonut.type}>Cake</option>
        </select>

        <label htmlFor="">Sprinkles:</label>
        <input 
          name="sprinkles"
          type="radio"
          id="true"
          value={newDonut.sprinkles}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
        />
        <label htmlFor="radio">True</label>
        <input 
          name="sprinkles"
          type="radio"
          id="false"
          value={newDonut.sprinkles}
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
        />
        <label htmlFor="radio">False</label>

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
          onChange={(evt) => setNewDonut({ ...newDonut, [evt.target.name]: evt.target.value })}
        >
          <option value={newDonut.rating}>1</option>
          <option value={newDonut.rating}>2</option>
          <option value={newDonut.rating}>3</option>
          <option value={newDonut.rating}>4</option>
          <option value={newDonut.rating}>5</option>
        </select>

        <button type="submit">Add to Donut Case</button>
      </form>
    </>
  );
}