import React from "react";
import "./Footer.css";
import { FaFacebook,FaInstagram, FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
     <img src="/ll logo2.png" className="main-logo" alt="Little Lemon Logo" />
        <h4>Navigation</h4>
         <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <h4>Contact Us</h4>
        <p>1234 Lemon St, Chicago, IL 60601</p>
        <p>(123) 456-7890</p>

        <h4>Follow Us</h4>
        <ul>
          <li> <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a></li>
          <li><a  href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram /></a></li>
          <li><a  href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter /></a></li>
        </ul>

        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;