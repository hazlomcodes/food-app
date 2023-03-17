import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../styles/images/logo.png';

const Navbar = () => {
  const navRef = useRef();

  return (
    <header>
      <nav ref={navRef}>
        <Link className="logonavbar" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/donation/search">Search</Link>
        <Link to="/donation">Donate</Link>
        <Link to="/">Login</Link>
        <Link to="/reserved">Reserved Items</Link>
      </nav>
    </header>
  );
};

export default Navbar;
