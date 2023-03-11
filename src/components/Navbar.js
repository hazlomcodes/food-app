import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import logo from '../styles/images/logo.png'


const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
      
        
      <Link className="logo" to ='/'>
          <img src={logo} alt="logo" />
        </Link>
        <a href="/#">Home</a>
        
        <Link to="/donation/search">Search</Link>
        <Link to="/donation">Donate</Link>
        <Link to="/login">Login</Link>
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
