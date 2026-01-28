import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navigateAndScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to home first
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Nesto Dev</h1>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <button className="nav-btn" onClick={() => navigateAndScroll("hero")}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-btn" onClick={() => navigateAndScroll("about")}>
            About
          </button>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
