import React, { useState } from 'react';

const Search = ({ donations }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Search Term:', e.target.value);
  };

  const filteredDonations = donations.filter((donation) => {
    return donation.foodItem.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log('Filtered Donations:', filteredDonations);

  return (
    <div>
      <input type="text" placeholder="Search donations" value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredDonations.map((donation, index) => (
          <li key={index}>{donation.foodItem} - {donation.quantity} - {donation.expiration}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
