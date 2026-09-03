import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: ["JavaScript", "Python", "TypeScript", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "fas fa-layer-group",
      skills: ["React", "React Native", "Node.js", "Express.js", "FastAPI"]
    },
    {
      title: "Databases & Data Tools",
      icon: "fas fa-database",
      skills: ["MySQL", "MongoDB", "Prisma ORM", "Excel"]
    },
    {
      title: "AI / ML",
      icon: "fas fa-robot",
      skills: ["LLM", "Gemini API", "Computer Vision"]
    },
    {
      title: "APIs & Authentication",
      icon: "fas fa-key",
      skills: ["API", "OAuth 2.0"]
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: ["AWS", "Git", "GitHub"]
    },
    {
      title: "Core Skills",
      icon: "fas fa-brain",
      skills: ["DSA", "Debugging", "Problem Solving", "Web Development"]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      skills: ["Teamwork", "Communication", "Time Management", "Leadership", "Decision-making", "Responsibility"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;