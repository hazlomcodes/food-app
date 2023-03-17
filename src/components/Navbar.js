import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import logo from "../styles/images/logo.png"



const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
      
        
      <Link className="logonavbar" to ='/'>
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/donation/search">Search</Link>
        <Link to="/donation">Donate</Link>
        <Link to="/">Login</Link>
        <Link to="/reserved">Reserved Items</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      </header>
  );
}

export default Navbar;
