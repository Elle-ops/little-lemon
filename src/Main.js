import React from "react";
import "./Main.css";
import restaurantFood from "./assets/restaurant-food.jpg";
import greekSalad from "./assets/greek-salad.jpg";
import bruschetta from "./assets/bruschetta.png"; 
import lemonDessert from "./assets/lemon-dessert.jpg";
import star from "./assets/star.png";
import jamieOlive from "./assets/JamieOlive.png";
import johnDoe from "./assets/JohnDoe.png";
import maryJane from "./assets/MaryJane.png";
import tillyJonas from "./assets/TillyJonas.png";   

function Main() {
  return (
    <main>
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

        <section className="specials-section">
          <h2>This weeks specials!</h2>
          <button className="online-btn">Online Menu</button>
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

       <h2 className="testimonials">Testimonials</h2>
        <section className="testimonials-section">
          
          <article className="card">
            <h4>Rating: 5/5</h4>
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={jamieOlive} alt="Customer Jamie" />
            <p>"The food was amazing and the service was excellent!"</p>
            <p>- Sarah K.</p>
          </article>
          <article className="card">
            <h4>Rating: 4/5</h4>
             <img src={star} className="star-rating" alt="4 star rating" />
            <img src={star} className="star-rating" alt="4 star rating" />
            <img src={star} className="star-rating" alt="4 star rating" />
            <img src={star} className="star-rating" alt="4 star rating" />
           
            <img src={johnDoe} alt="Customer John" />
            <p>"A wonderful dining experience with delicious dishes."</p>
            <p>- John D.</p>
          </article>
          <article className="card">
            <h4>Rating: 5/5</h4>
           <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={maryJane} alt="Customer Mary Jane" />
            <p>"I can't wait to come back and try more items from the menu!"</p>
            <p>- Emily R.</p>
          </article>

           <article className="card">
            <h4>Rating: 3/5</h4>
          <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={tillyJonas} alt="Customer Tilly" />
            <p>"The food was absolutely fantastic, and the ambiance was perfect!"</p>
            <p>- Tilly J.</p>
          </article>
       </section>

       <section className="about-section">
        <h2>About Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming Mediterranean restaurant located in the heart of Chicago.
           We pride ourselves on our warm hospitality and delicious, authentic dishes that bring
          the flavors of the Mediterranean to life. Whether you're joining us for a casual lunch
          or a special dinner, we strive to create a memorable dining experience for all our guests.</p>
          <img src="assets/restaurant.jpg" alt="Restaurant " />
          <img src="assets/restaurant-chef-B.jpg" alt="Restaurant Chef B" />
       </section>
    </main>
  );
}

export default Main;
