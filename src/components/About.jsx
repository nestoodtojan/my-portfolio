import React from "react";
import "./about.css";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import figmaLogo from "../assets/figma.png";
import nodejsLogo from "../assets/nodejs.png";
import GitHubLogo from "../assets/GitHub.png";
import GitLogo from "../assets/Git.png";
import VSCodeLogo from "../assets/VSCode.png";
import pythonLogo from "../assets/python.png";
import flaskLogo from "../assets/flask.png";

const icons = [
  { src: htmlLogo, name: "HTML" },
  { src: cssLogo, name: "CSS" },
  { src: jsLogo, name: "JavaScript" },
  { src: reactLogo, name: "React" },
  { src: nodejsLogo, name: "Node.js" },
  { src: pythonLogo, name: "Python"},
  { src: flaskLogo, name: "Flask" },
  { src: VSCodeLogo, name: "VS Code" },
  { src: GitHubLogo, name: "GitHub" },
  { src: GitLogo, name: "Git" },
  { src: figmaLogo, name: "Figma" },
  
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
       I am a passionate and motivated software engineer driven by curiosity and a love for creating solutions that make an impact. 
       I enjoy tackling challenges, continuously learning, and collaborating with others to bring ideas to life. 
       I am committed to growth, innovation, and delivering high-quality work in any environment.
      </p>

      <div className="tech-slider">
        {icons.map((icon, idx) => (
          <div key={idx} className="icon-wrapper">
            <img src={icon.src} alt={icon.name} />
            <span className="tooltip">{icon.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
