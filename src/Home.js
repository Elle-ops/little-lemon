import React from "react";
import "./Home.css";


import Nav from "./Nav";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Chicago from "./Chicago";
import Footer from "./Footer";


function Home() {
  return (
    <>
   
   <CallToAction />
   <Specials />
   <Testimonials />
   <Chicago />
   
    </>
  );
}

export default Home;
