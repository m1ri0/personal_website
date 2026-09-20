import { useState, useRef, useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.jsx';
import './stacks.css';

const skillsData = [
  {
    category: "Languages & Programming",
    skills: ["C", "C#", "Python", "Java", "PHP", "CUDA", "OpenGL"]
  },
  {
    category: "Backend & Data",
    skills: ["FastAPI", "PostgreSQL", "DB Migrations", "Redis", "Celery", "SQLAlchemy", "CLI"]
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "DevOps, Networks & Linux",
    skills: ["Docker", "Arch Linux", "DNS (Unbound)", "SSH", "Nginx", "Git", "Clean Architecture"]
  }
];

export default function Stacks() {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCategory = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="stack-section reveal-on-scroll" id="stacks">
      <div className="stacks-container">
        
        <div className="stacks-header">
          <h2> ❯ ls <span className="stacks-header-command">mario/stacks/</span></h2>
          <p className="stacks-subtitle">Technologies and tools with which I have experience</p>
        </div>
        
        <div className="stack-grid">
          {skillsData.map((group, index) => (
            <div 
              key={index} 
              className={`stack-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleCategory(index)}
            >
              <h3 className="card-title">{group.category}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};