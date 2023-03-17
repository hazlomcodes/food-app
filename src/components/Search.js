import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [donations, setDonations] = useState([]);
  const [allDonations, setAllDonations] = useState([]);


  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/donations`);
        setAllDonations(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDonations();
  }, []);


  const handleSearch = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get(
        `http://localhost:3000/donations/search?name=${searchTerm}`
      );
      setDonations(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    
    <div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search for donations"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <ul className="donation-list">
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.name} - {donation.quantity} - {donation.expiration} - {donation.donator} - {donation.reserved} -{donation.location}
             
          </li>
        ))}
      </ul>
      <h2>All Donations</h2>
      <ul className="donation-list">
        {allDonations.map((donation) => (
          <li key={donation.id}>
            {donation.name} - {donation.quantity} - {donation.expiration} - {donation.donator} - {donation.reserved} - {donation.location}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Search;
