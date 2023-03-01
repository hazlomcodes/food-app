import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {
  return (
    <header>
        <h3>Logo </h3>
        <nav>
            <a href="/">Home</a>
            <a href="/">Search</a>
            <a href="/">Donate</a>
            <a href="/">Login</a>
            <button>
             <FaTimes />
             </button>
            
        </nav>
          <button>
            <FaBars />
          </button>
    </header>
  )
}

export default Navbar;