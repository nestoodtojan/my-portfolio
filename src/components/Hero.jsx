import React from "react";
import Profile from "../assets/profile.jpg";
import './Hero.css';

const Hero = () => {

  // Create an array of 30 snowflakes
  const snowflakes = Array.from({ length: 30 });

  return (
    <section id="hero" className="hero">
      <img src={Profile} alt="Nesto Odtojan" className="hero-profile" />
      <h1>Hello, I'm Ernesto Odtojan</h1>
      <p>Frontend Developer</p>
      <a href="#projects" className="btn">See My Work</a>

      {snowflakes.map((_, index) => {
  // Random horizontal position and animation delay
  const style = {
    left: `${Math.random() * 100}vw`,
    animationDelay: `${Math.random() * 10}s`,
    fontSize: `${Math.random() * 100 + 50}px` // ❄ Bigger snowflakes
  };
  return (
    <div key={index} className="snowflake" style={style}>
      ❄
    </div>
  );
})}
    </section>
  );
};

export default Hero;
