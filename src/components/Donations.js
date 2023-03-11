import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../styles/donation.css";

const DonationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiration, setExpiration] = useState("");
  const [donator, setDonator] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/donations", {
        name,
        quantity,
        expiration,
        donator,
        contact,
      });
      console.log("Donation submitted:", response.data);

      setName("");
      setQuantity("");
      setExpiration("");
      setDonator("");
      setContact("");
      setSubmitted(true);

      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReturn = () => {
    setSubmitted(false);
  }

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
          <label className="donation-form__label" htmlFor="donation-donator">
            Donator:
            <input
              className="donation-form__input"
              type="text"
              value={donator}
              onChange={(event) => setDonator(event.target.value)}
              required
              placeholder="Enter your name"
              title="Donator"
              id="donation-donator"
            />
            
          </label>
          <label className="donation-form__label" htmlFor="donation-contact">
            Contact:
            <input
              className="donation-form__input"
              type="text"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              required
              placeholder="Please enter either contact number or email"
              title="Contact"
              id="donation-Contact"
            />
            
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
  onSubmit: PropTypes.func,
};

export default DonationForm;
