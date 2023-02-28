import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonationForm from './DonationForm';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/donations" element={<DonationForm />} />
      </Routes>
    </div>
  );
}

export default App;
