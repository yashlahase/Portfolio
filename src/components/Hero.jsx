import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Full-Stack Learner", "React Native Developer", "Python Programmer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="particles"></div>
      <div className="hero-content">
        <div className="hero-image">
          <div className="image-placeholder">
            {/* <img src="/profile.jpeg" alt="Yash Lahase" /> */}
            <i className="fas fa-user"></i>
          </div>
        </div>
        <h1 className="hero-name">Yash Lahase</h1>
        <h2 className="hero-title">Web Developer | React & JavaScript Enthusiast</h2>
        <div className="typing-text">
          <span className="typing">{texts[currentText]}</span>
        </div>
        <div className="hero-buttons">
          <a href="/resume.pdf" download="Yash_Lahase_Resume.pdf" className="btn-primary">
            <i className="fas fa-download"></i>
            Download Resume
          </a>
          <a href="#projects" className="btn-secondary">
            <i className="fas fa-eye"></i>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;