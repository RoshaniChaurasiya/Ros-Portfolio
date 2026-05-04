// src/components/Portfolio.js
import React, { memo } from 'react';
import '../styles/Portfolio.css';
import Pearl from '../Images/Ucode.jpg';
import Website from '../Images/website.jpg';
import Home from '../Images/Home.jpg';
import linked from '../Images/office.jpg';
import Chat from '../Images/chat-bot.jpg';

const projects = [
  {
    image: Pearl,
    alt: 'Pearl Academy Project',
    title: 'Pearl Academy Project',
    description: 'Students participate in live online lessons, interacting in real time with experienced teachers and peers.',
    link: 'https://www.pearlacademy.com/',
  },
  {
    image: Website,
    alt: 'Mayora Website',
    title: 'Mayora Website',
    description: 'Mayora Infotech provides groundbreaking technological solutions tailored to businesses across various sizes and sectors.',
    link: 'https://mayora-website.vercel.app/',
  },
  {
    image: Home,
    alt: 'Curry Cares Project',
    title: 'Curry Cares Project',
    description: 'A program by Roofing by Curry that provides families in need with a new roof.',
    link: 'https://currycares.com',
  },
  {
    image: linked,
    alt: '360linked Project',
    title: '360linked Project',
    description: 'A mobile-first platform for managing projects, assets, and vendors with AI insights.',
    link: 'https://360linked.com/'
  },
  {
    image: Chat,
    alt: 'Chat Bot App',
    title: 'Chat Bot App',
    description: 'An AI-powered chat bot for just about anything talk with as boyfriend.',
    link: 'https://chat-bot-sage-seven.vercel.app/',
  }
];

// Lazy loaded portfolio card component
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
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo`}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
        <p className="portfolio-text">Click any project card to view the live demo</p>

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