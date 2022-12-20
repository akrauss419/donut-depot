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
}