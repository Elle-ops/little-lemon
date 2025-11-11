  import React from "react";
  import restaurantChefB from "./assets/restaurant-chefB.jpg";
  import "./Chicago.css";
  
  function Chicago() {
    return (
      <>
        <section className="about-section">
          <div className="about-content">
            <h2 className="main-title">About Little Lemon</h2>
        <h3 className="main-subtitle1">Chicago</h3>
        <p className="Chicago-text">Little Lemon is a charming Mediterranean restaurant located in the heart of Chicago.
           We pride ourselves on our warm hospitality and delicious, authentic dishes that bring
          the flavors of the Mediterranean to life. Whether you're joining us for a casual lunch
          or a special dinner, we strive to create a memorable dining experience for all our guests.</p>
          </div>
          <div className="about-images">
          <img src={restaurantChefB} alt="Restaurant Chef B" className="img1" />

          </div>
       </section>
       </>
    );
} 
export default Chicago;  