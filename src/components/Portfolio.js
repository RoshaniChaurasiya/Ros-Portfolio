// src/components/Portfolio.js
import React, { memo } from 'react';
import { projects } from '../data/projects';
import '../styles/Portfolio.css';

const PortfolioCard = memo(({ project, index }) => {
  return (
    <figure
      key={index}
      className="work"
      role="img"
      aria-label={`${project.title} - ${project.description}`}
    >
      <img 
        src={project.image} 
        alt={project.alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption className="layer">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-list" aria-label={`${project.title} technologies`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo`}
          className="project-link"
        >
          <span>Live Demo</span>
          <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </figcaption>
    </figure>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

const Portfolio = memo(() => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h1 className="sub-title-portfolio">My Work</h1>
        <p className="portfolio-text">Production projects with the stack, scope, and live links up front.</p>

        <div className="work-list">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
