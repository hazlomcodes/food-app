import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DonationForm from './Donations';
import Login from "./login";
import Navbar from "./Navbar";


function App() {
  return (
    <div className='app'>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/donation" element={<DonationForm />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}
  
        
    
 
export default App;
