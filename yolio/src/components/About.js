import React, { useState } from "react";
import Typing from "react-typing-animation"; // Import the Typing component
import "./About.css"; // Import the CSS file for custom styles

export default function About() {
  const [showButton, setShowButton] = useState(false);

  // Function to handle the completion of the typography animation
  const handleTypingComplete = () => {
    setShowButton(true); // Show the button after the animation completes
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="animate-text">
            {/* Use the Typing component to create the typography animation */}
            <Typing speed={40} hideCursor={true} onFinishedTyping={handleTypingComplete}>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
                <Typing.Delay ms={500} />
                Hello! I'm Bethany.
                <Typing.Delay ms={250} /> {/* Add a delay between lines */}
                <br className="title-font sm:text-2xl text-2xl mb-2 font-medium text-gray-800" />
                <Typing.Delay ms={250} />
                I create awesome designs for you!
              </h1>
              <Typing.Delay ms={100} />
              <Typing.Delay ms={100} />
              <p className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-800">
                <Typing.Delay ms={200} />
                I love my dogs, enjoy my coffee and live to create~
              </p>
            </Typing>
          </div>
          {showButton && ( // Show the button only after the typography animation completes
            <div className="flex justify-center">
              <a
                href="#contact"
                className={`fade-in-from-left inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg text-white hover:text-pink-200`}
              >
                Contact Me!
              </a>
            </div>
          )}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="lady" alt="lady" src="./lady.svg" />
        </div>
      </div>
    </section>
  );
}
