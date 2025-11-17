import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { TimesProvider } from "./TimesContext";

function App() {
  return (
    <Router>
      <TimesProvider>
        <Header />
        <Main />
        <Footer />
      </TimesProvider>
    </Router>
  );
}

export default App;
