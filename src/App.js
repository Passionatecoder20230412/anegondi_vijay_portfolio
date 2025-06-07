import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import Animation from './Animation'; // Import the Animation component

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(null);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    bot: '', // Honeypot field
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Honeypot trap check
    if (formData.bot) {
      setMessage({ type: 'error', text: 'Spam detected. Submission blocked.' });
      return;
    }

    // Cooldown logic
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 15000) {
      setMessage({ type: 'error', text: 'Please wait a few seconds before submitting again.' });
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setMessage({ type: 'error', text: 'Please fill in your name and email.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setMessage(null);
    setLastSubmitTime(now);

    emailjs
      .sendForm('service_hkr8ze1', 'template_hqjkxxl', formRef.current, {
        publicKey: 'iT87D86ehTNaitST1',
      })
      .then(() => {
        setLoading(false);
        setMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', comment: '', bot: '' });
      })
      .catch(() => {
        setLoading(false);
        setMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
      });
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <div className="container">
      <Animation />{/* Insert the Animation component here */}
      <header id="header"className='header'>
        <div className="photoBoxWrapper">
          <div className="photoBox">
            <img src="/IMG_20240115_123909.jpg" alt="Anegondi Vijay" className="photo" />
          </div>
        </div>
        <h1 className="name">Anegondi Vijay</h1>
        <p className="title">Web Developer Portfolio</p>
      </header>

      <div className="stickyMenu">
        <div
          className="menuButton"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter') toggleMenu(); }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`navMenu ${menuOpen ? 'open' : ''}`}>
          <a href="#about" className="navLink" onClick={() => scrollToSection('about')}>About Me</a>
          <a href="#experience" className="navLink" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#skills" className="navLink" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#projects" className="navLink" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#contact" className="navLink" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>

      <section id="about" className="section fullHeight">
        <h2 className="sectionTitle">About Me</h2>
        <p>
          Hello! I'm Vijay, a passionate web developer specializing in building clean and functional websites using modern web technologies like HTML,
          CSS, and JavaScript. I enjoy creating user-friendly and responsive designs.
        </p>
      </section>

      <section id="experience" className="section fullHeight">
        <h2 className="sectionTitle">Experience</h2>
        <ul className="list">
          <li className="listItem">Actively Learning | 2023 – Present</li>
          <li className="listItem">Proactively transitioned from ECE to software development with a strong focus on ReactJS and front-end technologies.</li>
          <li className="listItem">Completed several hands-on projects to build real-world problem-solving skills.</li>
          <li className="listItem">Gained practical understanding of component-based architecture, JavaScript ES6+, and responsive design.</li>
          <li className="listItem">Demonstrated ability to work independently, troubleshoot code, and learn modern development tools.</li>
        </ul>
      </section>
      <section id="experience" className="section fullHeight">
  <h2 className="sectionTitle">Technical Skills</h2>
  <ul className="list">
    <li className="listItem">
      <a href="https://www.oracle.com/java/technologies/javase-certification.html" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/java-logo.png" alt="Java Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/javascript-logo.png" alt="JavaScript Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/html5-logo.png" alt="HTML5 Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/css3-logo.png" alt="CSS3 Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
        <img src="/react.png" alt="React Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/git-logo.png" alt="Git Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/github-logo.png" alt="GitHub Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/vercel-logo.png" alt="Vercel Logo" className="skillLogo" />
      </a>
    </li>
    <li className="listItem">
      <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener noreferrer">
        <img src="/path/to/vscode-logo.png" alt="VS Code Logo" className="skillLogo" />
      </a>
    </li>
  </ul>
</section>


      <section id="skills" className="section fullHeight">
        <h2 className="sectionTitle">Skills</h2>
        <ul className="list">
          <li className="listItem">HTML5, CSS3</li>
          <li className="listItem">JavaScript (ES6+)</li>
          <li className="listItem">React.js</li>
          <li className="listItem">Responsive Web Design</li>
          <li className="listItem">Git &amp; GitHub</li>
        </ul>
      </section>

      <section id="projects" className="section fullHeight">
        <h2 className="sectionTitle">Projects</h2>
        <div className="projectItem">
          <h3>Personal Blog Website</h3>
          <p>
            A simple blog website built with React and styled-components. Features responsive design and dynamic content.
          </p>
          <a
            className="link"
            href="https://github.com/yourusername/blog-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>

        <div className="projectItem">
          <h3>Portfolio Website</h3>
          <p>
            My portfolio site showcasing my projects, skills, and contact information, built with React and CSS.
          </p>
          <a
            className="link"
            href="https://github.com/yourusername/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      <section id="contact" className="section fullHeight">
        <h2 className="sectionTitle">Contact</h2>

        <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
          {/* Honeypot field (invisible) */}
          <input
            type="text"
            name="bot"
            value={formData.bot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          <label htmlFor="name" className="label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Your full name"
            required
          />

          <label htmlFor="email" className="label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="your.email@example.com"
            required
          />

          <label htmlFor="comment" className="label">Comments</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="textarea"
            placeholder="Your message"
          />

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {message && (
            <p className={message.type === 'error' ? 'errorMsg' : 'successMsg'}>
              {message.text}
            </p>
          )}
        </form>
      </section>

      <footer className="footer">&copy; 2025 Anegondi Vijay. All rights reserved.</footer>
    </div>
  );
}

export default App;
