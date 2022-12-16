import { useState } from 'react';

export default function NewShopPage({ addShop }) {
  const [newShop, setNewShop] = useState({
    name: "",
    location: ""
  });

  function handleAddShop(evt) {
    evt.preventDefault();
    addShop(newShop);
    setNewShop({
      name: "",
      location: ""
    });
  }

  return(
    <>
      <h1>Add a Donut Shop</h1>
      <form onSubmit={handleAddShop}>
        <label htmlFor="input">Shop Name:</label>
        <input
          name="name"
          type="text"
          value={newShop.name}
          onChange={(evt) => setNewShop({...newShop, [evt.target.name]: evt.target.value })}
          placeholder="Name"
          required
        />

        <label htmlFor="input">Location:</label>
        <input
          name="location"
          type="text"
          value={newShop.location}
          onChange={(evt) => setNewShop({...newShop, [evt.target.name]: evt.target.value })}
          placeholder="Street, City, State, Zip"
          required
        />

        <button type="submit">Add Donut Shop</button>
      </form>
    </>
  );
}