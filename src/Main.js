import { Routes, Route } from 'react-router-dom';
import Home from "./Home";  /* Import other page components as needed */
import React from 'react';
import About from './About';
import Menu from './Menu';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </main>
  );
}

export default Main;
