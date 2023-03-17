import React from "react";
import "../styles/home.css";
import logo from "../styles/images/logo.png";

const locations = [
  {
    address: "123 Main St, Manchester",
    imageUrl: "https://maps.googleapis.com/.../image1.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/123+Main+St+Manchester",
  },
  {
    address: "The Farmer's Arms, Salford",
    imageUrl: "https://maps.googleapis.com/.../image2.jpg",
    googleMapsUrl:
      "https://www.google.com/maps/place/The+Farmers+Arms/@53.5103081,-2.3331755,15.15z/data=!4m14!1m7!3m6!1s0x487baf15c08bd20b:0x93dd3410616fb3ce!2s456+Elm+St,+Swinton,+Manchester+M27+6AY!3b1!8m2!3d53.5148821!4d-2.3446887!3m5!1s0x487baf059bb42153:0x863101ed725b9667!8m2!3d53.5075477!4d-2.3282746!16s%2Fg%2F1v830njy",
  },
  {
    address: "Piccadilly Gardens, Manchester",
    imageUrl: "https://maps.googleapis.com/.../image3.jpg",
    googleMapsUrl:
      "https://www.google.com/maps/place/Piccadilly+Gardens+Manchester",
  },
  {
    address: "Manchester Central Library",
    imageUrl: "https://maps.googleapis.com/.../image4.jpg",
    googleMapsUrl:
      "https://www.google.com/maps/place/Manchester+Central+Library/@53.4782389,-2.2463175,17z/data=!3m1!4b1!4m6!3m5!1s0x487bb1bf63ca19df:0xc032a853dc6e0ba7!8m2!3d53.4782357!4d-2.2441235!16zL20vMDQ5OHl5",
  },
  {
    address: "Heaton Park, Manchester",
    imageUrl: "https://maps.googleapis.com/.../image5.jpg",
    googleMapsUrl:
      "https://www.google.com/maps/place/Heaton+Park+Pay+and+Display+Car+Park/@53.5367426,-2.2444666,17z/data=!4m14!1m7!3m6!1s0x487bb006264fc2c9:0x2581bc3b9853b122!2sHeaton+Park!8m2!3d53.5367394!4d-2.2422726!16zL20vMDZsOWcy!3m5!1s0x487bb1e96d50cee1:0x6e308a2f5121c75b!8m2!3d53.5367741!4d-2.2433949!16s%2Fg%2F11m_kysf5m",
  },
  {
    address: "MediaCityUK, Salford",
    imageUrl: "https://maps.googleapis.com/.../image6.jpg",
    googleMapsUrl: "https://www.google.com/maps/place/MediaCityUK+Salford",
  },
];

const Home = () => {
  return (
    <div className="some-page-wrapper">
      <div className="row">
        <div className="column">
          <div className="logo-column">
            Some Text in Column One
            <img src={logo} alt="logo-app"></img>
          </div>
        </div>
        <div className="column">
          <div className="green-column">
            Welcome to Do-Nation, the food donation application that aims to
            reduce food waste and help those in need. With Do-Nation, you can
            easily donate your excess food items and reserve food that would
            otherwise go to waste. By simply logging in with your Facebook
            account, you can browse available donations and reserve them for
            pick-up at convenient locations throughout Manchester. With each
            donation, you are helping to combat food waste and contribute to a
            more sustainable future. So whether you have extra food to donate or
            are in need of a meal, Do-Nation is here to help. Join us in our
            mission to donate, reserve, and stop food waste today.
          </div>
          <p></p>
        </div>
      </div>
      <div className="locations-container">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={location.imageUrl}
                alt={location.address}
                className="location-image"
              />
            </a>
            <div className="location-address">{location.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

{
  /* <img
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
            </Link> */
}

{
  /* <Link to="/login" className="home-btn">
          Sign Up Now
        </Link> */
}
