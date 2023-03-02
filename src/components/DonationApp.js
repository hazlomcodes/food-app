import React, { useState } from 'react';
import DonationForm from './Donations';
import Search from './Search';


const Donations = () => {
  const [donations, setDonations] = useState([]);

  const handleDonation = (donation) => {
    setDonations([...donations, donation]);
  };

  console.log(donations);

  return (
    <div>
      <h1>Donations</h1>
      <DonationForm onDonation={handleDonation} />
      <Search donations={donations} />

    </div>
  );
};

export default Donations;
