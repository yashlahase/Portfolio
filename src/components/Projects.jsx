import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Fashion-E-Commerce",
      subtitle: "Full-Stack Fashion E-Commerce",
      date: "July 2026",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript"],
      shortDescription: "Full-stack fashion e-commerce platform with authentication, cart, wishlist and admin dashboard.",
      description: "Developed a full-stack Fashion E-Commerce Application with features including User Authentication, Product Browsing, Wishlist, Cart Management, and Order Tracking. Implemented secure JWT Authentication, Product Search, Filtering, and a Responsive UI to enhance user experience. Developed an Admin Dashboard for managing Products, Categories, Users, and Orders, along with Analytics Support.",
      github: "https://github.com/yashlahase/Fashion-E-Commerce.git",
      demo: "https://fashion-e-commerce-tau-sage.vercel.app/",
      isApk: false
    },
    {
      title: "BillVision-AI",
      subtitle: "AI-Powered Electricity Bill Analyzer",
      date: "April 2026",
      tech: ["Python", "Flask", "Google Gemini API", "OpenPyXL", "HTML", "CSS", "JavaScript", "Computer Vision", "Vercel"],
      shortDescription: "AI-powered electricity bill analyzer that extracts structured data from bills and PDFs.",
      description: "Developed an AI-powered Electricity Bill Analyzer using Google Gemini 1.5 Flash (Vision) to extract structured data from electricity bill images and PDFs. Built a Flask-based backend to process uploaded documents, validate AI responses, and automate data extraction with robust JSON parsing. Automated the generation of Excel reports using OpenPyXL while preserving predefined templates and formulas.",
      github: "https://github.com/yashlahase/BillVision-AI.git",
      demo: "https://billvision-ai.vercel.app/",
      isApk: false
    },
    {
      title: "Job Tracker",
      subtitle: "Full-Stack Job Application Manager",
      date: "Jan 2026",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      shortDescription: "Full-stack job application management platform with analytics, search, filtering and JWT authentication.",
      description: "Track job applications with dashboard analytics, advanced search & filter. Secure authentication with JWT.",
      github: "https://github.com/yashlahase/Job_Tracker_.git",
      demo: "https://job-tracker-gamma-nine.vercel.app",
      isApk: false
    },
    {
      title: "QRConnect",
      subtitle: "Digital Visiting Card App",
      date: "Nov 2025",
      tech: ["React Native", "JavaScript", "Expo", "AsyncStorage"],
      shortDescription: "Digital visiting card application with QR code generation and offline sharing.",
      description: "Generates digital visiting cards with QR. Works offline (QR scan + generate).",
      github: "https://github.com/yashlahase/QRConnect.git",
      demo: "https://expo.dev/artifacts/eas/n8xvuZLFhUYKQpZSBskZdr.apk",
      isApk: true
    },
    {
      title: "Tic-Tac-Toe",
      subtitle: "Interactive Game",
      date: "Sep 2025",
      tech: ["React.js", "JavaScript", "CSS"],
      shortDescription: "Interactive real-time Tic-Tac-Toe game with win and draw detection.",
      description: "Real-time win/draw detection. Highlight winning patterns.",
      github: "https://github.com/yashlahase/TIC-TAC-TOE.git",
      demo: "https://tic-tac-toe-paoz.vercel.app/",
      isApk: false
    },
    {
      title: "Mood-Tune Generator",
      subtitle: "Music Web App",
      date: "Apr 2025",
      tech: ["JavaScript", "CSS", "HTML"],
      shortDescription: "Mood-based music web application with curated songs and motivational quotes.",
      description: "Mood-based music web app. Smooth UI transitions. Motivational quotes.",
      github: "https://github.com/yashlahase/mood.git",
      demo: "https://mood-yashlahases-projects.vercel.app/",
      isApk: false
    },
    {
      title: "Beginner's Guide to Running",
      subtitle: "Responsive Website",
      date: "Dec 2024",
      tech: ["HTML", "CSS"],
      shortDescription: "Responsive guide website with training tips, running schedules and interactive navigation.",
      description: "Responsive website with external navigation buttons, beginner-friendly training schedules, and running tips.",
      github: "https://github.com/yashlahase/runnningguide.git",
      demo: "https://runbegin.netlify.app/",
      isApk: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <h4>{project.subtitle}</h4>
              <p className="project-card-desc">{project.shortDescription}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button
                  type="button"
                  className="project-btn view-more-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="project-modal-overlay" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="project-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button"
              className="modal-close-btn" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className="modal-title-row">
                <h3>{selectedProject.title}</h3>
                <span className="project-date">{selectedProject.date}</span>
              </div>
              <h4>{selectedProject.subtitle}</h4>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h5>About Project</h5>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-section">
                <h5>Tech Stack</h5>
                <div className="tech-stack">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a 
                href={selectedProject.github} 
                className="project-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a 
                href={selectedProject.demo} 
                className="project-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={selectedProject.isApk ? "fas fa-download" : "fas fa-external-link-alt"}></i> {selectedProject.isApk ? "APK Download" : "Live Demo"}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;