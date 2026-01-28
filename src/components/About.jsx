import React from "react";
import "./about.css";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import figmaLogo from "../assets/figma.png";
import nodejsLogo from"../assets/nodejs.png";
import GitHubLogo from"../assets/GitHub.png";
import GitLogo from"../assets/Git.png";
import VSCodeLogo from"../assets/VSCode.png";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with experience in React.js, HTML, CSS, and JavaScript.
        I enjoy building responsive and user-friendly web applications.
      </p>

      <div className="tech-slider">
        <div className="tech-track">
          {/* First set */}
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="React" />
          <img src={nodejsLogo} alt="Nodejs" />
          <img src={VSCodeLogo} alt="VSCode"/>
          <img src={GitHubLogo} alt="Github" />
          <img src={GitLogo} alt="Git" />
          <img src={figmaLogo} alt="Figma" />

          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="React" />
          <img src={nodejsLogo} alt="Nodejs" />
          <img src={VSCodeLogo} alt="VSCode"/>
          <img src={GitHubLogo} alt="Github" />
          <img src={GitLogo} alt="Git" />
          <img src={figmaLogo} alt="Figma" />

          



          

        </div>
      </div>
    </section>
  );
};

export default About;
