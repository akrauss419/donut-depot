import { useState } from 'react';
import './NewShopPage.css';

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
      <h1 className="ShopFormHeadline">Add a Donut Shop</h1>
      <div className="ContainerContainer">
        <div className="ShopFormContainer">
          <form onSubmit={handleAddShop} className="ShopForm">
            <div className="ShopNameInput">
              <label htmlFor="input" className="ShopNameLabel">Shop Name:</label>
              <input
                className="NewShopInput"
                name="name"
                type="text"
                value={newShop.name}
                onChange={(evt) => setNewShop({...newShop, [evt.target.name]: evt.target.value })}
                placeholder="Name"
                required
              />
            </div>

            <div className="ShopLocationInput">
              <label htmlFor="input" className="ShopLocationLabel">Location:</label>
              <input
                className="NewShopInput"
                name="location"
                type="text"
                value={newShop.location}
                onChange={(evt) => setNewShop({...newShop, [evt.target.name]: evt.target.value })}
                placeholder="Street, City, State, Zip"
                required
              />
            </div>

            <div className="AddShopButtonContainer">
              <button type="submit">Add Donut Shop</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}