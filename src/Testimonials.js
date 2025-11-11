import React from "react";
import star from "./assets/star.png";
import jamieOlive from "./assets/JamieOlive.png";
import johnDoe from "./assets/JohnDoe.png";
import maryJane from "./assets/MaryJane.png";
import tillyJonas from "./assets/TillyJonas.png"; 



function Testimonials() {
  return (
    <>
      <h2 className="testimonials">Testimonials</h2>
      <section className="testimonials-section">
        <article>
            <h4>Rating: 5/5</h4>
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={jamieOlive} className="menu-food" alt="Customer Jamie" />
            <p>"The food was amazing and the service was excellent!"</p>
            <p>- Sarah K.</p>
          </article>
          <article>
            <h4>Rating: 4/5</h4>
             <img src={star} className="star-rating" alt="4 star rating" />
            <img src={star} className="star-rating" alt="4 star rating" />
            <img src={star} className="star-rating" alt="4 star rating" />
            <img src={star} className="star-rating" alt="4 star rating" />
           
            <img src={johnDoe} className="menu-food" alt="Customer John" />
            <p>"A wonderful dining experience with delicious dishes."</p>
            <p>- John D.</p>
          </article>
          <article >
            <h4>Rating: 5/5</h4>
           <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={maryJane} className="menu-food" alt="Customer Mary Jane" />
            <p>"I can't wait to come back and try more items from the menu!"</p>
            <p>- Emily R.</p>
          </article>

           <article>
            <h4>Rating: 3/5</h4>
          <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={star} className="star-rating" alt="5 star rating" />
            <img src={tillyJonas} className="menu-food" alt="Customer Tilly" />
            <p>"The food was absolutely fantastic, and the ambiance was perfect!"</p>
            <p>- Tilly J.</p>
          </article>
       </section>
       </>
    );
}

export default Testimonials;
