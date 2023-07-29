import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useEffect, useRef, useState } from "react";
import { skills, techSkills } from "../data";
import "./Skills.css"; // Import the CSS file for custom styles

export default function Skills() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [bounceCount, setBounceCount] = useState(0); // Track the number of bounces
  const [completed, setCompleted] = useState(false); // Track if animation has completed twice
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the skills section becomes visible in the viewport
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          setBounceCount(0); // Reset the bounce count
          setCompleted(false); // Reset the completed state
        } else {
          setSkillsVisible(false);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.3, // Adjust this threshold to control when the animation starts
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Function to handle the end of the bounce animation
  const handleBounceEnd = () => {
    setBounceCount((prevCount) => prevCount + 1); // Increment the bounce count
    if (bounceCount >= 2) {
      setCompleted(true); // Set the completed state to true after two bounces
    }
  };

  return (
    <section id="skills" ref={skillsRef}>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-4">
            My Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600">
            I'm Good at This...
          </p>
        </div>
        <div className="flex flex-wrap lg:w-5/6 sm:mx-auto sm:mb-3 -mx-3">
          {techSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div
                className={`bg-gray-800 rounded flex p-4 h-full items-center ${
                  skillsVisible && !completed ? "bounce-animation" : ""
                }`}
                onAnimationEnd={handleBounceEnd} // Called when the bounce animation ends
              >
                <BadgeCheckIcon className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-5/6 sm:mx-auto sm:mb-3 -mx-3">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div
              className={`bg-gray-800 rounded flex p-4 h-full items-center ${
                skillsVisible && !completed ? "bounce-animation" : ""
              }`}
              onAnimationEnd={handleBounceEnd} // Called when the bounce animation ends
            >
              <BadgeCheckIcon className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
