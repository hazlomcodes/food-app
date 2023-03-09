import React from "react";
import { Routes, Route } from "react-router-dom";

import Donation from "./Donations";
import Login from "./login";
import Navbar from "./Navbar";
import Search from "./Search";
import Home from "./Home";
import ItemsNeeded from "./itemsNeeded";

function App() {
  return (
    <div className="app">
      <React.Fragment>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/item" element={<ItemsNeeded />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
