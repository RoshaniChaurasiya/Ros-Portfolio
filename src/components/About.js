import React, { useState } from 'react';
import aboutImg from '../Images/About.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    "JavaScript", "React.js", "Redux", "Next.js", "API", " HTML5", "CSS3", "Bootstrap", "Material UI", "Git","Wix Velo", "Responsive Design"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={aboutImg} alt="Roshani Chaurasiya" className="about-img" />
          </div>

          <div className="about-col-2">
            <h1 className="sub-title-about">About Me</h1>
            <ul className="about-list">
              <li><strong>I’m Roshani Chaurasiya</strong>, a dedicated Frontend Developer with 2 years of experience building interactive, high-performance web applications.</li>
              <li>Proficient in frameworks like React.js & Next.js, with focus on clean code and SSR optimization.</li>
              <li>Skilled in integrating RESTful APIs and collaborating with backend teams for data-driven features.</li>
              <li>Continuously learning web technologies, performance optimization, and accessibility practices.</li>
            </ul>

            <div className="tab-titles" role="tablist" aria-label="About section tabs">
              <button
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => setActiveTab('skills')}
                role="tab"
                aria-selected={activeTab === 'skills'}
                aria-controls="skills"
                id="tab-skills"
              >
                Skills
              </button>

              <button
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => setActiveTab('experience')}
                role="tab"
                aria-selected={activeTab === 'experience'}
                aria-controls="experience"
                id="tab-experience"
              >
                Experience
              </button>

              <button
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => setActiveTab('education')}
                role="tab"
                aria-selected={activeTab === 'education'}
                aria-controls="education"
                id="tab-education"
              >
                Education
              </button>
            </div>

            <div
              className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}
              id="skills"
              role="tabpanel"
              aria-labelledby="tab-skills"
              hidden={activeTab !== 'skills'}
            >
              <div className="skills-grid">
                {skills.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            <div
              className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}
              id="experience"
              role="tabpanel"
              aria-labelledby="tab-experience"
              hidden={activeTab !== 'experience'}
            >
              <ul className="experience-list">
                <li><span>Jun 2024 - Present</span><br />Mayu Technologies - Web Developer</li>
                <li><span>Dec 2022 - Jun 2024</span><br />Nextpage IT Solutions Pvt Ltd. - React Developer</li>
              </ul>
            </div>

            <div
              className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}
              id="education"
              role="tabpanel"
              aria-labelledby="tab-education"
              hidden={activeTab !== 'education'}
            >
              <ul className="education-list">
                <li><span>2018 - 2021</span><br />Bachelor of Science (BSc), Udai Pratap College</li>
                <li><span>2017 - 2018</span><br />Senior Secondary (XII), Saraswati Vidya Mandir Inter College</li>
                <li><span>2015 - 2016</span><br />Higher Secondary (X), Saraswati Vidya Mandir Inter College</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;