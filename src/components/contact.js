import React, { useState } from "react";
import './contact.css';

import LinkedInLogo from "../assets/linkedin.png";
import GitHubLogo from "../assets/GitHub.png";
import GmailLogo from "../assets/email.png";
import KirbyWalkGif from "../assets/kirby-walk.gif";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ernestoodtojanjr@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Create snowflakes
  const snowflakes = Array.from({ length: 30 });

  return (
    <div className="contact-page">
      {/* Snowflakes */}
      {snowflakes.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${Math.random() * 15 + 10}px`,
        };
        return <div key={i} className="snowflake" style={style}>❄</div>;
      })}

      {/* Kirby walking at bottom */}
      <img src={KirbyWalkGif} alt="Kirby walking" className="kirby-walk" />

      <h1>Contact Me</h1>
      <p>Have a project or question? Connect with me directly!</p>

      <div className="contact-links">
        <h3>Reach me at:</h3>

        <p className="contact-item">
          <img src={LinkedInLogo} alt="LinkedIn" />
          <a 
            href="https://www.linkedin.com/in/nestoodtojan" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/nestoodtojan
          </a>
        </p>

        <p className="contact-item">
          <img src={GitHubLogo} alt="GitHub" />
          <a 
            href="https://github.com/nestoodtojan" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://github.com/nestoodtojan
          </a>
        </p>

        <p className="contact-item email-copy">
          <img src={GmailLogo} alt="Gmail" />
          <span>{email}</span>
          <button onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Contact;
