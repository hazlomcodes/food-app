import React, { useState, onSubmit, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/donation.css';
import Reserved from './Reserved';
import { AuthContext } from '../context/AuthProvider';

const DonationForm = ({ onSubmit }) => {
  const { FBdata } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiration, setExpiration] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/donations', {
        name,
        quantity,
        expiration,
        donator: FBdata.name // set the donator field to the user's name from context
      });
      console.log('Donation submitted:', response.data);

      setName('');
      setQuantity('');
      setExpiration('');
      setLocation('');
      setSubmitted(true);

      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReturn = () => {
    setSubmitted(false);
  };

  return (
    <div className="donation-form-container">
      {submitted ? (
        <div className="donation-form__message">
          <p>Thank you for signing up your donation!</p>
          <button className="donation-form__return-button" onClick={handleReturn}>
            Return to form
          </button>
        </div>
      ) : (
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
          <label className="donation-form__label" htmlFor="donation-username">
            Username:
            <input
              className="donation-form__input"
              type="text"
              value={FBdata?.name} // set the value to the user's name from context
              readOnly // make the input read-only
              required
              placeholder="Enter your username"
              title="Username"
              id="donation-username"
            />
          </label>
          <label className="donation-form__label" htmlFor="donation-reserved"></label>
          <label className="donation-form__label">
            Drop off Location
            <select id="donation-dropoff" value={location}>
              <option> -select-</option>
              <option>123 Main St Manchester</option>
              <option>The Farmers Arms, Salford</option>
              <option>Piccadilly Gardens, Manchester</option>
              <option>Manchester Central Library</option>
              <option>Heaton Park, Manchester</option>
              <option>MediaCityUK, Salford</option>
            </select>
          </label>
          <button className="donation-form__submit-button" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

DonationForm.propTypes = {
  onSubmit: PropTypes.func
};

export default DonationForm;
