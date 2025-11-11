import { Routes, Route } from 'react-router-dom';
import Home from "./Home";  /* Import other page components as needed */
import React from 'react';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default Main;
