import React from "react";
import "./Projects.css"; // Matches the file name exactly

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website built with React.js, showcasing projects and skills.",
      link: "https://nestoportfolio.netlify.app",
    },
    {
      name: "Music Player",
      description:
        "A fully functional React music player with interactive controls and lyrics display.",
      link: "https://musicninesto.netlify.app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
