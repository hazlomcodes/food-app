import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DonationApp  from "./DonationApp"
import Login from "./login";
import Navbar from "./Navbar";
import Search from './Search';
import Home from './Home';


function App() {
  return (
    <div className='app'>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" component={Search} />
          <Route path="/donation" element={<DonationApp />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}
  
        
    
 
export default App;
