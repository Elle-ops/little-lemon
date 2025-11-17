import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Reservations.css";

function Reservations() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    occasion: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (formData.date) {
      if (typeof fetchAPI !== "undefined") {
        const times = fetchAPI(formData.date);
        setAvailableTimes(times);
      } else {
        setAvailableTimes(["17:00", "18:00", "19:00"]);
      }
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let success = true;

    if (typeof submitAPI !== "undefined") {
      success = submitAPI(formData);
    }

    if (success) {
      navigate("/confirmed"); // ⭐ Redirect to confirmation page
    } else {
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <section className="reserve-section">
      <h2 className="reserve-title">Reserve a Table</h2>
      <form className="reserve-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your first name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="date-night">Date Night</option>
            <option value="business-meeting">Business Meeting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            <option value="">Select number of guests</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Select Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Message / Comment</label>
          <textarea
            id="message"
            name="message"
            placeholder="Add any special requests..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="reserve-btn">
          Submit Reservation
        </button>
      </form>
    </section>
  );
}

export default Reservations;
