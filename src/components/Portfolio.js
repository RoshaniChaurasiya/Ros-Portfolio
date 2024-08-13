// src/components/Portfolio.js
import React from 'react';
import Ucode from '../Images/Ucode.jpg';
import Home from '../Images/Home.jpg'
import Shopping from '../Images/Shopping.jpg'
import Weather from '../Images/Weather.jpg'
import Tic from '../Images/Tic-tac.jpg'
import Note from '../Images/notes.jpg'


const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title-portfolio">My Work</h1>
        <p className="portfolio-text">(Please go to the image then click on the icon so you can see the project.)</p>
        <div className="work-list">
          <div className="work">
            <img src={Home} alt='Home' />
            <div className="layer">
              <h3>Curry Cares Project</h3>
              <p>
                Curry Cares! is a program created by Roofing by Curry to provide
                families that have fallen on hard times the new roof they need.
              </p>
              <a href="https://currycares.com"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={Ucode} alt='Ucode' />
            <div className="layer">
              <h3>Ucode Project</h3>
              <p>
                Kids participate in live online lessons, interacting in real
                time with an experienced teacher and a small group of students.
              </p>
              <a href="https://ucode.com"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={Shopping} alt='Shop' />
            <div className="layer">
              <h3>E-Commerce ShopEase</h3>
              <p>
                Discover a seamless shopping experience with ShopEase. Explore a wide range
                of products, enjoy secure transactions, and benefit from fast delivery.
              </p>
              <a href="https://18-shop-ease.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={Weather} alt='Weather' />
            <div className="layer">
              <h3>Weather App</h3>
              <p>
                Stay updated with the latest weather conditions using my Weather
                App. Get real-time forecasts, current temperatures, and ensuring
                you're always prepared for what's ahead.
              </p>
              <a href="https://apps-weathers.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={Tic} alt='Tic-Tac' />
            <div className="layer">
              <h3>Tic Tac Toe Game</h3>
              <p>
                Designed with a sleek, modern interface, this project highlights
                the ease and enjoyment of a classic game. Whether you're playing
                against friends or honing your strategy.
              </p>
              <a href="https://ros-tic-tac-toe.netlify.app/">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={Note} alt='Notes' />
            <div className="layer">
              <h3>My Notes</h3>
              <p>
                My Notes is your digital notebook, perfect for jotting down ideas,
                organizing tasks, and keeping track of important information.
              </p>
              <a href="https://task-todos-rns.netlify.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
