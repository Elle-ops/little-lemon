import { Routes, Route } from 'react-router-dom';
import Home from "./Home";  /* Import other page components as needed */
import React from 'react';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import Contact from './Contact';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;
