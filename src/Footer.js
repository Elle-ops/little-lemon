import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
     <img src="footer-logo.png" alt="Little Lemon Logo" />
        <h4>Navigation</h4>
         <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <h4>Contact Us</h4>
        <p>1234 Lemon St, Chicago, IL 60601</p>
        <p>(123) 456-7890</p>

        <h4>Follow Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>

        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;