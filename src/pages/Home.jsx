// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Values from "../components/Values";
import Rooms from "../components/Rooms";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Rooms />
      <About />
      <Testimonials />
    </>
  );
}

export default Home;