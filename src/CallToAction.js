import React from "react";
import "./CallToAction.css";
import restaurantFood from "./assets/restaurant-food.jpg";

function CallToAction() {
  return (
    <>
<section className="intro-section">
      <div className="intro-content">
          <h2 className="main-title">Little Lemon</h2>
          <h3 className="main-subtitle">Chicago</h3>
          <p className="main-description">We are a family owned
            mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.</p>
            <button className="reserve-table-btn">Reserve a Table</button>
      </div>

            <div className="main-food">
            <img src={restaurantFood} alt="Restaurant Food" />
            </div>
        </section>
        </>
    );
}

export default CallToAction;
