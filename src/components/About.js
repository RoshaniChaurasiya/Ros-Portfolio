import React, { useState, useCallback, memo } from "react";
import aboutImg from "../Images/About.jpg";
import "../styles/About.css";

const About = memo(() => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Redux",
    "REST API Integration",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Wix Velo",
    "Git",
    "Responsive Web Design"
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* TOP SECTION */}
        <div className="about-top">

          <div className="about-col-1">
            <div className="about-img-wrapper">
              <img 
                src={aboutImg} 
                alt="Roshani Chaurasiya - Frontend Developer" 
                className="about-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="about-col-2">
            <h1 className="sub-title-about">About Me</h1>

            <ul className="about-list">
              <li>
                <strong>I’m Roshani Chaurasiya</strong>, a Frontend Developer with
                <strong> 2.6 years of experience</strong> building modern and scalable web applications.
              </li>

              <li>
                Experienced in developing applications using
                <strong> React.js, Next.js, and JavaScript</strong> with focus on performance and clean architecture.
              </li>

              <li>
                Skilled in <strong>API integration, responsive UI development,
                component-based architecture, and modern UI frameworks</strong>.
              </li>

              <li>
                Passionate about building pixel-perfect interfaces and learning
                new frontend technologies.
              </li>
            </ul>
          </div>

        </div>

        {/* TABS SECTION */}
        <div className="about-tabs">

          <div className="tab-titles">
            <button
              className={activeTab === "skills" ? "tab-links active-link" : "tab-links"}
              onClick={() => handleTabChange("skills")}
              aria-label="View skills"
            >
              Skills
            </button>

            <button
              className={activeTab === "experience" ? "tab-links active-link" : "tab-links"}
              onClick={() => handleTabChange("experience")}
              aria-label="View experience"
            >
              Experience
            </button>

            <button
              className={activeTab === "education" ? "tab-links active-link" : "tab-links"}
              onClick={() => handleTabChange("education")}
              aria-label="View education"
            >
              Education
            </button>
          </div>

          {activeTab === "skills" && (
            <div className="tab-contents">
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="tab-contents">
              <ul className="experience-list">

                <li>
                  <span>Nov 2025 – Present</span>
                  <h4>Mayora Infotech – Frontend Developer</h4>
                  <p>
                    Working on Studio App, Mayora Website and Monitor Admin Panel
                    using React.js and Next.js.
                  </p>
                </li>

                <li>
                  <span>Oct 2024 – Aug 2025</span>
                  <h4>Mayu Technologies – Web Developer</h4>
                  <p>
                    Developed Pearl Academy and Backlinks websites using
                    Wix Velo, JavaScript and REST APIs.
                  </p>
                </li>

                <li>
                  <span>Dec 2022 – Jun 2024</span>
                  <h4>Nextpage IT Solutions – React Developer</h4>
                  <p>
                    Built scalable applications including Currys Cares,
                    U Code and 360Linked using React and Next.js.
                  </p>
                </li>

              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div className="tab-contents">
              <ul className="education-list">

                <li>
                  <span>2018 – 2021</span>
                  <h4>Bachelor of Science (BSc)</h4>
                  <p>Udai Pratap College</p>
                </li>

                <li>
                  <span>2017 – 2018</span>
                  <h4>Senior Secondary (XII)</h4>
                  <p>Saraswati Vidya Mandir Inter College</p>
                </li>

                <li>
                  <span>2015 – 2016</span>
                  <h4>Higher Secondary (X)</h4>
                  <p>Saraswati Vidya Mandir Inter College</p>
                </li>

              </ul>
            </div>
          )}

        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';
export default About;