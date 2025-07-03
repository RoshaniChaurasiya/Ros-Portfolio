// src/components/Portfolio.js
import React from 'react';
import Pearl from '../Images/Ucode.jpg';
import Backlinks from '../Images/Backlinks.jpg';
import Home from '../Images/Home.jpg';
import linked from '../Images/office.jpg';
import ToDo from '../Images/ToDo.webp';
import Tic from '../Images/Tic-tac.jpg';

const projects = [
  {
    image: Pearl,
    alt: 'Pearl Academy Project',
    title: 'Pearl Academy Project',
    description: 'Students participate in live online lessons, interacting in real time with experienced teachers and peers.',
    link: 'https://www.pearlacademy.com/',
  },
  {
    image: Backlinks,
    alt: 'Backlinks Project',
    title: 'Backlinks',
    description: 'A platform for digital marketers to exchange backlinks and improve SEO.',
    link: 'https://www.backlinkexchange.com/',
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
    image: ToDo,
    alt: 'ToDo App',
    title: 'ToDo App',
    description: 'A task management app to add, edit, search, and organize your daily tasks efficiently.',
    link: 'https://todos-solutions-app.netlify.app/',
  },
  {
    image: Tic,
    alt: 'Tic Tac Toe Game',
    title: 'Tic Tac Toe Game',
    description: 'A modern interface for the classic game — play with friends or improve your strategy.',
    link: 'https://ros-tic-tac-toe.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h1 className="sub-title-portfolio">My Work</h1>
        <p className="portfolio-text">(Hover over any project and click the icon to view the live demo.)</p>

        <div className="work-list">
          {projects.map((project, index) => (
            <figure key={index} className="work">
              <img src={project.image} alt={project.alt} />
              <figcaption className="layer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;