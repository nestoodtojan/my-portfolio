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

const icons = [
  { src: htmlLogo, name: "HTML" },
  { src: cssLogo, name: "CSS" },
  { src: jsLogo, name: "JavaScript" },
  { src: reactLogo, name: "React" },
  { src: nodejsLogo, name: "Node.js" },
  { src: VSCodeLogo, name: "VS Code" },
  { src: GitHubLogo, name: "GitHub" },
  { src: GitLogo, name: "Git" },
  { src: figmaLogo, name: "Figma" }
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate Front developer with a strong commitment to creating engaging and efficient web experiences. 
        I enjoy transforming ideas into responsive, user-friendly applications that not only look great but also provide seamless functionality. 
        My focus is on designing and building interfaces that enhance user interaction while maintaining performance and accessibility. 
        I am constantly exploring new techniques and best practices to improve my craft and deliver high-quality, innovative web solutions.
      </p>

      <div className="tech-slider">
        <div className="tech-track">
          {/* Original set */}
          {icons.map((icon, idx) => (
            <div key={idx} className="icon-wrapper">
              <img src={icon.src} alt={icon.name} />
              <span className="tooltip">{icon.name}</span>
            </div>
          ))}
          {/* Clone set for seamless infinite scroll */}
          {icons.map((icon, idx) => (
            <div key={"clone-" + idx} className="icon-wrapper">
              <img src={icon.src} alt={icon.name} />
              <span className="tooltip">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
