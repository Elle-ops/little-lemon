/* global fetchAPI, submitAPI */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Reservations.css";

function Reservations() {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("First name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    occasion: Yup.string().required("Please select an occasion"),
    guests: Yup.number()
      .min(1, "At least 1 guest required")
      .max(10, "Max 10 guests")
      .required("Please select number of guests"),
    date: Yup.date().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    message: Yup.string(),
  });

  // Update available times when date changes
  const handleDateChange = (date) => {
    if (typeof fetchAPI !== "undefined") {
      const times = fetchAPI(date);
      setAvailableTimes(times);
    } else {
      setAvailableTimes(["17:00", "18:00", "19:00"]); // fallback for tests
    }
  };

  const initialValues = {
    name: "",
    surname: "",
    email: "",
    occasion: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    let success = true;

    if (typeof submitAPI !== "undefined") {
      success = submitAPI(values);
    }

    if (success) {
      navigate("/confirmed"); // navigate to confirmed booking page
      resetForm();
      setAvailableTimes([]);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="reserve-section">
      <h2 className="reserve-title">Reserve a Table</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="reserve-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" placeholder="Enter your first name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <Field type="text" name="surname" placeholder="Enter your surname" />
              <ErrorMessage name="surname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <Field as="select" name="occasion">
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="date-night">Date Night</option>
                <option value="business-meeting">Business Meeting</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <Field as="select" name="guests">
                <option value="">Select number of guests</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="guests" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <Field
                type="date"
                name="date"
                onChange={(e) => {
                  setFieldValue("date", e.target.value);
                  handleDateChange(e.target.value);
                }}
              />
              <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Select Time</label>
              <Field as="select" name="time">
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="time" component="div" className="error" />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message / Comment</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Add any special requests..."
                rows="4"
              />
            </div>

            <button type="submit" className="reserve-btn">
              Submit Reservation
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Reservations;
