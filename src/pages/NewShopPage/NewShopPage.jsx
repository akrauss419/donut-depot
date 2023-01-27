import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as shopsAPI from '../../utilities/shops-api';
import './NewShopPage.css';

export default function NewShopPage({ setShops, addShop }) {
  const [newShop, setNewShop] = useState({
    name: "",
    location: ""
  });

  const navigate = useNavigate();

  async function handleAddShop(evt) {
    evt.preventDefault();
    const allShops = await shopsAPI.create(newShop);
    setShops(allShops);
    setNewShop({
      name: "",
      location: ""
    });
    navigate('/shops');
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