import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const navRef = useRef();

  return (
    <header>
      <nav ref={navRef}>
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
