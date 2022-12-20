import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateShopPage({ shops, handleUpdateShop }) {
  const { shopId } = useParams();
  const changedShop = shops.find((s) => s._id === shopId);
  const [shopFormData, setShopFormData] = useState(changedShop);
  if (!changedShop) return null;

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
      <h1>Update Shop Post</h1>
      <form onSubmit={handleSubmitEdits}>
        <label htmlFor="input">Shop Name:</label>
        <input
          name="name"
          type="text"
          value={shopFormData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <label htmlFor="input">Location:</label>
        <input
          name="location"
          type="text"
          value={shopFormData.location}
          onChange={handleChange}
          placeholder="Street, City, State, Zip"
        />

        <button type="submit">Submit Edits</button>
      </form>
    </>
  );
}