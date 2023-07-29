// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function App() {
    // Define the hover image URL here
    const hoverImageURL = "path/to/your/hover-image.jpg";
  return (
    <main className="text-pink-200 bg-pink-200 body-font">
      <Navbar />
      <About />
      <Projects hoverImageURL={hoverImageURL}/>
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}