// eslint-disable-next-line no-unused-vars
import React from 'react';
import './skills.css';
import { 
  FaPython, 
  FaJs, 
  FaJava, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt,
  FaDatabase,
  FaFileAlt,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaCogs
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: "Intermediate", icon: <FaJs />, progress: 80 },
        { name: "Python", level: "Basic", icon: <FaPython />, progress: 60 },
        { name: "Java", level: "Basic", icon: <FaJava />, progress: 65 }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        { name: "React", level: "Intermediate", icon: <FaReact />, progress: 85 },
        { name: "Node.js", level: "Intermediate", icon: <FaNodeJs />, progress: 80 },
        { name: "Express.js", level: "Basic", icon: <SiExpress />, progress: 80 },
        { name: "HTML5", level: "Basic", icon: <FaHtml5 />, progress: 90 },
        { name: "CSS3", level: "Basic", icon: <FaCss3Alt />, progress: 85 }
      ]
    },
    {
      title: "Databases & Reporting",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: "Intermediate", icon: <SiMongodb />, progress: 75 },
        { name: "SQL", level: "Intermediate", icon: <SiMysql />, progress: 80 },
        { name: "Crystal Reports", level: "Advanced", icon: <FaFileAlt />, progress: 95 }
      ]
    },
    {
      title: "Tools & AI",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Intermediate", icon: <FaGitAlt />, progress: 80 },
        { name: "GitHub", level: "Intermediate", icon: <FaGithub />, progress: 85 },
        { name: "OpenAI & AI Tools", level: "Basic", icon: <FaRobot />, progress: 70 },
        { name: "n8n Automation", level: "Basic", icon: <FaCogs />, progress: 65 }
      ]
    }
  ];

  const getLevelClass = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced': return 'advanced';
      case 'intermediate': return 'intermediate';
      case 'basic': return 'basic';
      default: return '';
    }
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Expertise & Proficiency</span>

      <div className="skills__container container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skills__content">
            <h3 className="skills__title">
              {category.icon} {category.title}
            </h3>
            <div className="skills__box">
              <div className="skills__group">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skills__data">
                    <div className="skills__icon">
                      {skill.icon}
                    </div>
                    <div className="skills__info">
                      <h4 className="skills__name">{skill.name}</h4>
                      <span className={`skills__level ${getLevelClass(skill.level)}`}>
                        {skill.level}
                      </span>
                      <div className="skills__progress">
                        <div 
                          className="skills__progress-bar" 
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
