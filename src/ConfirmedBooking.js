// src/ConfirmedBooking.js
import React from "react";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  return (
    <section className="confirm-section">
      <div className="confirm-card">
        <h1>✅ Booking Confirmed!</h1>
        <p>Thank you — we look forward to seeing you at Little Lemon.</p>
        <p>We have sent a confirmation to your email (if provided).</p>
      </div>
    </section>
  );
}
