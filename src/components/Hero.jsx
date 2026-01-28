import React from "react";
import SnowGif from "../assets/kirby1.gif";
import "./Hero.css";

const Hero = () => {
  const snowflakes = Array.from({ length: 30 });

  return (
    <section id="hero" className="hero">
      {/* Profile */}
      <img src={SnowGif} alt="Nesto Odtojan" className="hero-profile" />

      <h1>Hello, I'm Ernesto Odtojan</h1>
      <p>Frontend Developer</p>

      {/* Floating snowflakes or Kirby stars */}
      {snowflakes.map((_, index) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${Math.random() * 100 + 50}px`,
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
