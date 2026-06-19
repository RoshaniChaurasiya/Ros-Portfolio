import React, { useState, useCallback, memo } from "react";
import aboutImg from "../../Images/About.jpg";
import { profile } from "../../data/profile";
import "../about/About.css";

const About = memo(() => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
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
              {profile.about.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

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

            <button
              className={activeTab === "languages" ? "tab-links active-link" : "tab-links"}
              onClick={() => handleTabChange("languages")}
              aria-label="View languages"
            >
              Languages
            </button>
          </div>

          {activeTab === "skills" && (
            <div className="tab-contents">
              <div className="skills-grid">
                {profile.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="tab-contents">
              <ul className="experience-list">
                {profile.experience.map((job) => (
                  <li key={`${job.company}-${job.period}`}>
                    <span>{job.period}</span>
                    <h4>{job.role} - {job.company}, {job.location}</h4>
                    <p>{job.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div className="tab-contents">
              <ul className="education-list">
                {profile.education.map((item) => (
                  <li key={`${item.title}-${item.period}`}>
                    <span>{item.period}</span>
                    <h4>{item.title}</h4>
                    <p>{item.school}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "languages" && (
            <div className="tab-contents">
              <div className="skills-grid">
                {profile.languages.map((language) => (
                  <span key={language} className="skill-pill">{language}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;