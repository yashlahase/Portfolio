import React from 'react';

const Certifications = () => {
  const certs = [
    {
      title: "Generative AI for Everyone",
      issuer: "DeepLearning.AI",
      icon: "fas fa-certificate",
      link: "https://www.coursera.org/account/accomplishments/verify/NYMLUC2ZDUBZ"
    },
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      icon: "fas fa-award",
      link: "https://www.coursera.org/account/accomplishments/verify/QOQAETB8IIZ8"
    }
  ];

  return (
    <section className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card">
              <i className={cert.icon}></i>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;