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
        <Login />
        <DonationForm />
      </React.Fragment>
        
        
    
    </div>
  );
}

export default App;
