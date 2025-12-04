import React from 'react';

const Education = () => {
  const timeline = [
    {
      degree: "B.Tech CSE",
      period: "2024–2028",
      institution: "Newton School of Technology",
      grade: "7.18 CGPA"
    },
    {
      degree: "Class XII",
      period: "2024",
      institution: "Higher Secondary",
      grade: "74.17%"
    },
    {
      degree: "Class X",
      period: "2022",
      institution: "Secondary School",
      grade: "71.8%"
    }
  ];

  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="period">{item.period}</p>
                <p className="grade">{item.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;