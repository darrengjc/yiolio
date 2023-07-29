// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-scroll"; // Import the Link component

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl text-pink-200">
            Bethany Teow
          </a>
        </a>
     {/* Use Link component for smooth scrolling */}
     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-5 hover:text-white"
            style={{ cursor: "pointer" }} // Add the cursor style here
          >
            My Art
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-5 hover:text-white"
            style={{ cursor: "pointer" }} // Add the cursor style here
          >
            My Skills
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mr-5 hover:text-white"
            style={{ cursor: "pointer" }} // Add the cursor style here
          >
            My Testimonials
          </Link>
        </nav>
        <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ cursor: "pointer" }} // Add the cursor style here
            className="inline-flex items-center bg-pink-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-base mt-4 md:mt-0 text-gray-800 hover:text-pink-200">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
      </div>
    </header>
  );
}