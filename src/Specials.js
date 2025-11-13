 import React from "react";
 import "./Specials.css";
 import greekSalad from "./assets/greek-salad.jpg";
 import bruschetta from "./assets/bruschetta.png"; 
 import lemonDessert from "./assets/lemon-dessert.jpg"; 
 import { useNavigate } from "react-router-dom";
 
 function Specials() {

  const navigate = useNavigate();
  const handleOnlineMenuClick = () => {
    navigate("/menu");
  };

   return (   
 <>
 <section className="specials-section">
          <h2>This weeks specials!</h2>
          <button className="online-btn" onClick={handleOnlineMenuClick}>Online Menu</button>
        </section>

        <section className="menu-section">
          <article>
            <img src={greekSalad} className="menu-food" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p><strong>$12.99</strong></p>
            <a href="/order-online">Order a delivery</a>
          </article>

          <article>
           <img src={bruschetta} className="menu-food" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>This Italian appetizer is made with fresh tomatoes, basil, and mozzarella cheese on toasted bread.</p>
            <p><strong>$5.99</strong></p>
            <a href="/order-online">Order a delivery</a>
          </article>

          <article>
            <img src={lemonDessert} className="menu-food" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>Our Lemon Dessert is a light and refreshing treat made with real lemon juice and zest, served with a dollop of whipped cream.</p>
            <p><strong>$8.99</strong></p>
            <a href="/order-online">Order a delivery</a>
          </article>
        </section>
        </>
   );
 }

export default Specials;
