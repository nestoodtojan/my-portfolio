import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Nesto Dev</h1>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
