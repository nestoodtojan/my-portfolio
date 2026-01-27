import React from "react";
import './about.css';

// Import your language/tech images
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import figmaLogo from "../assets/figma.png";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with experience in React.js, HTML, CSS, and JavaScript.
        I enjoy building responsive and user-friendly web applications.
        I also know UI and UX design tools like Figma and Adobe XD.
      </p>

      <div className="tech-icons">
        <img src={htmlLogo} alt="HTML" title="HTML" />
        <img src={cssLogo} alt="CSS" title="CSS" />
        <img src={jsLogo} alt="JavaScript" title="JavaScript" />
        <img src={reactLogo} alt="React" title="React" />
        <img src={figmaLogo} alt="Figma" title="Figma" />
      </div>
    </section>
  );
};

export default About;
