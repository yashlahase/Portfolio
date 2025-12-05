import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 7972590077</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>yash.lahase@adypu.edu.in</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yash-lahase/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yashlahase" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;