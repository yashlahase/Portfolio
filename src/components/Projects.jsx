import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Fashion-E-Commerce",
      subtitle: "Full-Stack Fashion E-Commerce",
      date: "July 2026",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "JavaScript"],
      description: "Developed a full-stack Fashion E-Commerce Application with features including User Authentication, Product Browsing, Wishlist, Cart Management, and Order Tracking. Implemented secure JWT Authentication, Product Search, Filtering, and a Responsive UI to enhance user experience. Developed an Admin Dashboard for managing Products, Categories, Users, and Orders, along with Analytics Support.",
      github: "#placeholder-github-fashion-ecommerce",
      demo: "#placeholder-demo-fashion-ecommerce",
      isApk: false
    },
    {
      title: "Job Tracker",
      subtitle: "Full-Stack Job Application Manager",
      date: "Jan 2026",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      description: "Track job applications with dashboard analytics, advanced search & filter. Secure authentication with JWT",
      github: "https://github.com/yashlahase/Job_Tracker_.git",
      demo: "https://job-tracker-gamma-nine.vercel.app",
      isApk: false
    },
    {
      title: "QRConnect",
      subtitle: "Digital Visiting Card App",
      date: "Nov 2025",
      tech: ["React Native", "JavaScript", "Expo", "AsyncStorage"],
      description: "Generates digital visiting cards with QR. Works offline (QR scan + generate)",
      github: "https://github.com/yashlahase/QRConnect.git",
      demo: "https://expo.dev/artifacts/eas/n8xvuZLFhUYKQpZSBskZdr.apk",
      isApk: true
    },
    {
      title: "Tic-Tac-Toe",
      subtitle: "Interactive Game",
      date: "Sep 2025",
      tech: ["React.js", "JavaScript", "CSS"],
      description: "Real-time win/draw detection. Highlight winning patterns",
      github: "https://github.com/yashlahase/TIC-TAC-TOE.git",
      demo: "https://tic-tac-toe-paoz.vercel.app/",
      isApk: false
    },
    {
      title: "Mood-Tune Generator",
      subtitle: "Music Web App",
      date: "Apr 2025",
      tech: ["JavaScript", "CSS", "HTML"],
      description: "Mood-based music web app. Smooth UI transitions. Motivational quotes",
      github: "https://github.com/yashlahase/mood.git",
      demo: "https://mood-yashlahases-projects.vercel.app/",
      isApk: false
    },
    {
      title: "Beginner's Guide to Running",
      subtitle: "Responsive Website",
      date: "Dec 2024",
      tech: ["HTML", "CSS"],
      description: "Responsive website. External navigation buttons",
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
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="project-btn" target="_blank" rel="noopener noreferrer">
                  {project.isApk ? "APK Download" : "Live Demo"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;