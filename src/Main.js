import React from "react";

function Main() {
  return (
    <main>
    <section>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned
            mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.</p>
            <button>Reserve a Table</button>
        </section>

        <section>
          <h2>This weeks specials!</h2>
          <button>Online Menu</button>
        </section>

        <section>
          <article>
            <img src="greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p><strong>$12.99</strong></p>
            <a href="#">Order a delivery</a>
          </article>

          <article>
           <img src="bruschetta.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>This Italian appetizer is made with fresh tomatoes, basil, and mozzarella cheese on toasted bread.</p>
            <p><strong>$5.99</strong></p>
            <a href="#">Order a delivery</a>
          </article>

          <article>
            <img src="lemon-dessert.jpg" alt="Lemon Dessert" />
            
            <h3>Lemon Dessert</h3>
            <p>Our Lemon Dessert is a light and refreshing treat made with real lemon juice and zest, served with a dollop of whipped cream.</p>
            <p><strong>$8.99</strong></p>
            <a href="#">Order a delivery</a>
          </article>
        </section>

        <section>
          <h2>Testimonials</h2>
          <article>
            <h4>Rating: 5/5</h4>
            <img src="star-rating.png" alt="5 star rating" />
            <img src="customer-photo-sarah.jpg" alt="Customer Sarah" />
            <p>"The food was amazing and the service was excellent!"</p>
            <p>- Sarah K.</p>
          </article>
          <article>
            <h4>Rating: 4.5/5</h4>
            <img src="star-rating.png" alt="4.5 star rating" />
            <img src="customer-photo-john.jpg" alt="Customer John" />
            <p>"A wonderful dining experience with delicious dishes."</p>
            <p>- John D.</p>
          </article>
          <article>
            <h4>Rating: 5/5</h4>
            <img src="star-rating.png" alt="5 star rating" />
            <img src="customer-photo-emily.jpg" alt="Customer Emily" />
            <p>"I can't wait to come back and try more items from the menu!"</p>
            <p>- Emily R.</p>
          </article>

           <article>
            <h4>Rating: 5/5</h4>
            <img src="star-rating.png" alt="5 star rating" />
            <img src="customer-photo-tilly.jpg" alt="Customer Tilly" />
            <p>"The food was absolutely fantastic, and the ambiance was perfect!"</p>
            <p>- Tilly J.</p>
          </article>
       </section>

       <section>
        <h2>About Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming Mediterranean restaurant located in the heart of Chicago.
           We pride ourselves on our warm hospitality and delicious, authentic dishes that bring
          the flavors of the Mediterranean to life. Whether you're joining us for a casual lunch
          or a special dinner, we strive to create a memorable dining experience for all our guests.</p>
          <img src="restaurant-interior.jpg" alt="Restaurant Interior" />
          <img src="restaurant-exterior.jpg" alt="Restaurant Exterior" />
       </section>
    </main>
  );
}

export default Main;
