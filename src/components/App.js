import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DonationApp  from "./DonationApp"
import Login from "./login";
import Navbar from "./Navbar";
import Search from './Search';


function App() {
  return (
    <div className='app'>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/donation" element={<DonationApp />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}
  
        
    
 
export default App;
