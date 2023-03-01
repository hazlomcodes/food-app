import React, { useState } from 'react';
import "../styles/donation.css"

const DonationForm = () => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const donation = {
      foodItem,
      quantity,
      expiration,
    };
    console.log(donation);
    setFoodItem('');
    setQuantity('');
    setExpiration('');
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="foodItem">Food Item:</label>
        <input
          type="text"
          id="foodItem"
          className="form-control"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiration">Expiration Date:</label>
        <input
          type="date"
          id="expiration"
          className="form-control"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Donate</button>
    </form>
  );
};

export default DonationForm;
