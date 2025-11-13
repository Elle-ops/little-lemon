import React from "react";
import greekSalad from "./assets/greek-salad.jpg";
import bruschetta from "./assets/bruschetta.png";
import lemonDessert from "./assets/lemon-dessert.jpg";
import grilledFish from "./assets/grilled-fish.jpg";
import pastaPrimavera from "./assets/pasta-primaver.jpg";
import lambChops from "./assets/lamb-chop.jpg";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {


  const navigate = useNavigate();
  const handleOrderNowClick = () => {
    navigate("/checkout");
  };

  const menuItems = [
    {
      name: "Greek Salad",
      price: "$12.99",
      image: greekSalad,
      description:
        "Crisp lettuce, peppers, olives, and feta cheese tossed in our signature dressing and garnished with garlic croutons.",
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      image: bruschetta,
      description:
        "Fresh tomatoes, basil, and mozzarella served on toasted bread with a drizzle of olive oil.",
    },
    {
      name: "Lemon Dessert",
      price: "$8.99",
      image: lemonDessert,
      description:
        "A zesty lemon delight topped with whipped cream — the perfect way to finish your meal.",
    },
    {
      name: "Grilled Fish",
      price: "$15.50",
      image: grilledFish,
      description:
        "Tender grilled fish fillet seasoned with herbs, served with roasted vegetables and lemon butter sauce.",
    },
    {
      name: "Pasta Primavera",
      price: "$11.49",
      image: pastaPrimavera,
      description:
        "A vibrant mix of fresh vegetables and pasta in a light olive oil and garlic sauce.",
    },
    {
      name: "Lamb Chops",
      price: "$19.99",
      image: lambChops,
      description:
        "Juicy lamb chops grilled to perfection, served with mint sauce and a side of roasted potatoes.",
    },
  ];

  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <article className="menu-card" key={index}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <h3>{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price">{item.price}</p>
              <button className="order-btn" onClick={handleOrderNowClick}>Order Now</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;
