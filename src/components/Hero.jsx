import React, { useState, useEffect } from "react";
import ProfileImg from "../assets/profile.jpg";
import "./Hero.css";

const Hero = () => {
  // Generate snowflakes ONCE
  const [snowflakes] = useState(() =>
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 10}s`,
      fontSize: `${Math.random() * 20 + 10}px`,
      animationDuration: `${Math.random() * 10 + 5}s`,
    }))
  );

  // Typing effect
  const fullText = "Hello, I'm Ernesto Odtojan";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="hero" className="hero">
      {/* Snowflakes */}
      {snowflakes.map((style, i) => (
        <div key={i} className="snowflake" style={style}>
          ❄
        </div>
      ))}

      {/* Profile */}
      <img src={ProfileImg} alt="Nesto Odtojan" className="hero-profile" />

      {/* Typing Name */}
      <h1 className="typing-text">{text}</h1>

      <p>Information Technology Graduate</p>
    </section>
  );
};

export default Hero;
