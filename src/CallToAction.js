import React from "react";
import "./CallToAction.css";
import restaurantFood from "./assets/restaurant-food.jpg";
import { useNavigate } from "react-router-dom";

function CallToAction() {

const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/reservations");
  };



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
            <button className="reserve-table-btn" onClick={handleReserveClick}>Reserve a Table</button>
      </div>

            <div className="main-food">
            <img src={restaurantFood} alt="Restaurant Food" />
            </div>
        </section>
        </>
    );
}

export default CallToAction;
