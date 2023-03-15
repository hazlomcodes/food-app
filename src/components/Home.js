import React from "react";
//import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from "../styles/images/logo.png"

const Home = () => {
  return (


    <div className='some-page-wrapper'>
  <div className='row'>
    <div className='column'>
      <div className='logo-column'>
        Some Text in Column One
        <img src={logo} alt="logo-app"></img>
      </div>
    </div>
    <div className='column'>
      <div className='green-column'>
       We are Do-Nation
      </div>
    </div>
  </div>
</div>
);
};

export default Home;


{/* <img
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
            </Link> */}


             {/* <Link to="/login" className="home-btn">
          Sign Up Now
        </Link> */}