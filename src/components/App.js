import React from "react";
import { Routes, Route } from "react-router-dom";

import Donation from "./Donations";
import Login from "./login";
import Navbar from "./Navbar";
import Search from "./Search";
import Home from "./Home";
import ItemsNeeded from "./itemsNeeded";
import { AuthProvider } from "../context/AuthProvider";


function App() {
  return (
    <AuthProvider>
    <div className="app">
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donation/search" element={<Search />} />
          <Route path="/item" element={<ItemsNeeded />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </React.Fragment>
    </div>
    </AuthProvider>
  );
}

export default App;

