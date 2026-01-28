import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Projects from "./components/project";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero id="hero" />
              <About id="about" />
              <Footer />
            </>
          }
        />

        {/* Projects page */}
        <Route
          path="/project"
          element={
            <>
              <Projects />
              <Footer />
            </>
          }
        />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
