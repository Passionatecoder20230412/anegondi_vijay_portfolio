// components/Projects.js
import React from 'react';
import '../App.css';

const Projects = () => (
  <section id="projects" className="section active">
    <h2 className="sectionTitle">Projects</h2>

    <div className="projectItem">
      <h3>Personal Portfolio Website</h3>
      <p><b>Domain:</b>Frontend Web Development</p>
      <p><b>Project Overview:</b>Frontend Web Development:Developed a responsive and interactive portfolio website to present personal projects, skills, and contact information</p>
      <h4>
        Key Features & Technologies:
      </h4>
      <h4>Responsive Design:</h4>Built using React.js to ensure seamless performance across desktops, tablets, and mobile devices.
       <h4>Interactive Contact Form:</h4>: Integrated EmailJS to enable real-time message submissions without backend setup.
        <h4>Flexible Layouts:</h4>Utilized CSS Flexbox to achieve clean and adaptive component arrangement.
        <h4>Deployment:</h4>Hosted on Vercel with a custom domain for fast, professional-grade hosting and continuous deployment.
        <h4>Deployment Link:</h4>
       <a className="link"
        href="https://anegondi-vijay-portfolio.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel
      </a>
    </div>
    <div className="projectItem">
      <h3>Academic Projects</h3>
      <h3>Project:</h3>Implementation of Band Pass Filter for Satellite Communications Using CSRR Technique (2023).
      <h3>Description:</h3>Developed a compact band pass filter using the CSRR technique to enhance satellite communication systems, achieving reduced size and increased bandwidth.
    </div>
  </section>
);

export default Projects;
