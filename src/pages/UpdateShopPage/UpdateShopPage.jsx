import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as shopsAPI from '../../utilities/shops-api';
import './UpdateShopPage.css';

export default function UpdateShopPage({ shops, setShops}) {
  const navigate = useNavigate();
  const { shopId } = useParams();
  const changedShop = shops.find((s) => s._id === shopId);
  const [shopFormData, setShopFormData] = useState(changedShop);
  if (!changedShop) return null;

  async function handleUpdateShop(shopFormData, shopId) {
    await shopsAPI.updateShop(shopFormData, shopId);
    const updatedShops = await shopsAPI.index();
    setShops(updatedShops);
    navigate(`/shops/${shopId}`);
  }

  function handleChange(evt) {
    const updateShop = {...shopFormData, [evt.target.name]: evt.target.value};
    setShopFormData(updateShop);
  }

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    handleUpdateShop(shopFormData, shopId);
  }

  return(
    <>
      <h1 className="EditShopFormHeadline">Update Shop Post</h1>
      <div className="ContainerContainer">
        <div className="ShopFormContainer">
          <form onSubmit={handleSubmitEdits} className="ShopForm">
            <div className="ShopNameInput">
              <label htmlFor="input" className="ShopNameLabel">Shop Name:</label>
              <input
                className="NewShopInput"
                name="name"
                type="text"
                value={shopFormData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>

            <div className="ShopLocationInput">
              <label htmlFor="input" className="ShopLocationLabel">Location:</label>
              <input
                className="NewShopInput"
                name="location"
                type="text"
                value={shopFormData.location}
                onChange={handleChange}
                placeholder="Street, City, State, Zip"
              />
            </div>

            <div className="AddShopButtonContainer">
              <button type="submit">Submit Edits</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}