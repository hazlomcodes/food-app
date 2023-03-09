import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import "../styles/donation.css"

const DonationForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('//donations', { name, quantity, expiration });
      onSubmit(response.data);
      setName('');
      setQuantity('');
      setExpiration('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="donation-form" onSubmit={handleSubmit}>
      <label className="donation-form__label" htmlFor="donation-name">
        Name:
        <input
          className="donation-form__input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          placeholder="Enter name of donation"
          title="Name"
          id="donation-name"
        />
      </label>
      <label className="donation-form__label" htmlFor="donation-quantity">
        Quantity:
        <input
          className="donation-form__input"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
          placeholder="Enter the quantity"
          title="Quantity"
          id="donation-quantity"
        />
      </label>
      <label className="donation-form__label" htmlFor="donation-expiration">
        Expiration:
        <input
          className="donation-form__input"
          type="date"
          value={expiration}
          onChange={(event) => setExpiration(event.target.value)}
          required
          placeholder="Enter the expiration date"
          title="Expiration"
          id="donation-expiration"
        />
      </label>
      <button className="donation-form__submit-button" type="submit">Submit</button>
    </form>
  );
};

DonationForm.propTypes = {
  onSubmit: PropTypes.func
};

export default DonationForm;

