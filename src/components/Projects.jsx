import React from "react";
import './projects.css'; // Add CSS for styling

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", description: "My personal playlist interactive buttons inspired by spotify", link: "https://musicninesto.netlify.app" },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;