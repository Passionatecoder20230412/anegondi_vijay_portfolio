import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Animation from './components/Animation';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import TechnicalSkills from './components/TechnicalSkills';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 9000); // After animation ends
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="container">
        {!animationDone ? (
          <Animation />
        ) : (
          <>
            <div className="stickyMenu">
              <nav className="navMenu">
                <Link className="navLink" to="/">Header</Link>
                <Link className="navLink" to="/About">About Me</Link>
                <Link className="navLink" to="/TechnicalSkills">Technical Skills</Link>
                <Link className="navLink" to="/experience">Experience</Link>
                <Link className="navLink" to="/skills">Skills</Link>
                <Link className="navLink" to="/projects">Projects</Link>
                <Link className="navLink" to="/education">Education</Link>
                <Link className="navLink" to="/contact">Contact</Link>
              </nav>
            </div>

            {/* Define routes for each section */}
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/About" element={<About />} />
              <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
              
            <footer className="footer">&copy; 2025 Anegondi Vijay. All rights reserved.</footer>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
