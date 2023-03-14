import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from "../styles/images/logoText.png"

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1 className="home-header">Welcome to Our Food Donation Community</h1>
        <p className="home-text">
          We are a community of volunteers dedicated to fighting hunger and
          reducing food waste.
        </p>
      </div>

      <div className="row">
        <div className="col">
          <img
            src={logo}
            alt="Donate food"
          />
          <img
            src="https://www.urbanoutreach.co.uk/wp-content/uploads/bfi_thumb/donate-food-os294jy4q511zq5odfhd0rxbqwj22fhtcg16z8uqyo.png"
            alt="Donate food"
          />
          <div className="overlay">
            <h2 className="overlay-title">Donate Food</h2>
            <Link to="/donation" className="home-btn">
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      <div className="cta">
        <h2 className="cta-title">Join Our Community Today</h2>
        <p className="cta-text">
          Together, we can make a difference in the fight against food waste!
          Donate Donate Donate
        </p>
        <Link to="/login" className="home-btn">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
