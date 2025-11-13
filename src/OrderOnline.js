import React, { useState } from "react";

import "./OrderOnline.css";
import { useNavigate } from "react-router-dom";

function OrderOnline() {

const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };




  const [cartCount, setCartCount] = useState(0);

  const dishes = [
    {
      id: 1,
      name: "Greek Salad",
      description: "Crisp lettuce, olives, feta cheese and fresh veggies.",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Bruschetta",
      description: "Grilled bread topped with garlic, tomatoes and olive oil.",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1604908177522-040a73f85924?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Lemon Pasta",
      description: "Fresh pasta tossed in a zesty lemon and herb sauce.",
      price: 14.5,
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Grilled Salmon",
      description: "Perfectly grilled salmon with a lemon butter drizzle.",
      price: 18.75,
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Chicken Souvlaki",
      description: "Tender chicken skewers served with pita and tzatziki.",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1604908812331-0e01fcbfa7e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Lemon Tart",
      description: "Tangy lemon dessert topped with whipped cream.",
      price: 7.5,
      image:
        "https://images.unsplash.com/photo-1625943555673-57e40e3adcc9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <section className="order-section">
      <div className="order-header">
        <h2>Order Online</h2>
        <div className="cart" onClick={handleCheckoutClick} >
          <span>🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>

      <div className="order-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="order-card">
            <img src={dish.image} alt={dish.name} className="dish-img" />
            <h3>{dish.name}</h3>
            <p className="dish-desc">{dish.description}</p>
            <p className="dish-price">${dish.price.toFixed(2)}</p>
            <button className="order-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OrderOnline;
