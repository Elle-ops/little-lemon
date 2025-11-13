import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "credit-card",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <section className="checkout-success">
        <h2>✅ Order Confirmed!</h2>
        <p>Thank you, {formData.name}! Your order has been placed successfully.</p>
      </section>
    );
  }

  return (
    <section className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-grid">
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Your Order</h3>
          <ul>
            <li>Greek Salad — $12.99</li>
            <li>Lemon Pasta — $14.50</li>
            <li>Lemon Tart — $7.50</li>
          </ul>
          <p className="total">Total: $34.99</p>
        </div>

        {/* Customer Details */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Customer Details</h3>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={formData.payment === "credit-card"}
                onChange={handleChange}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={formData.payment === "paypal"}
                onChange={handleChange}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={formData.payment === "cash"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
