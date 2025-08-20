import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling


const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a passionate web developer with expertise in creating modern, 
            responsive web applications. I love turning complex problems into simple, 
            beautiful designs.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
        <div className="about-image">
          <img src="/src/assets/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;