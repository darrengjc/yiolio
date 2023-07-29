import React, { useState, useEffect } from "react";
import { projects } from "../data";
import "./Projects.css"; // Import the CSS file for custom styles

export default function Projects() {
  // State to manage the modal visibility and selected project
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // New state variable for animation

  // Function to handle opening the modal and setting the selected project
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    setModalVisible(true); // Set the state to true for animation
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setModalVisible(false); // Set the state to false for animation
    setTimeout(() => setShowModal(false), 300); // Delay hiding the modal to allow the animation to complete
  };

  // Add event listener to close the modal when clicking outside the modal container
  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (showModal && selectedProject) {
        const modalContainer = document.querySelector(".modal-container");
        if (modalContainer && !modalContainer.contains(event.target)) {
          handleCloseModal();
        }
      }
    };

    window.addEventListener("click", handleClickOutsideModal);

    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, [showModal, selectedProject]);

  return (
    <section id="projects" className="text-pink-400 bg-gray-800 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-pink-200 mb-4">
            My Artworks
          </h1>
        </div>
        {/* Project Links */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
               href={project.link}
               key={project.image}
               className="sm:w-1/2 w-100 p-4 cursor-pointer"
               onClick={() => handleOpenModal(project)}
             >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-pink-200 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

            {/* Modal */}
            {showModal && selectedProject && (
            <div
               className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50 modal-container ${
                 modalVisible ? "slide-in" : "slide-out" // Use the slide-in and slide-out classes
               }`}
               onClick={handleCloseModal} // Close the modal when clicking outside
             >
            <div className="modal-content bg-gray-900 w-2/3 p-8 rounded-lg flex">
                 {/* Left Side (Image) */}
                 <div className="w-1/2 pr-4">
                   <img
                     alt="gallery"
                     className="w-full h-full object-cover object-center rounded-lg"
                     src={selectedProject.image}
                   />
                 </div>
              <div className="w-1/2">
                <h2 className="text-pink-200 text-sm font-medium mb-1">
                  {selectedProject.subtitle}
                </h2>
                <h1 className="text-white text-lg font-medium mb-3">
                  {selectedProject.title}
                </h1>
                <p className="leading-relaxed text-pink-400">
                  {selectedProject.description}
                </p>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-200 underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}