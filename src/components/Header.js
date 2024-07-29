// src/components/Header.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Logo from '../Images/logo.jpeg';

const Header = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Developer",
        "React Developer",
        "Frontend Developer",
        "UI Developer",
        "HTML Developer",
      ],
      typeSpeed: 90,
      startDelay: 300,
      onStart: () => {
        if (typedElement.current) {
          typedElement.current.style.visibility = 'visible';
        }
      },
      onComplete: () => {
        if (typedElement.current) {
          typedElement.current.style.visibility = 'visible';
        }
      },
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const openmenu = () => {
    document.getElementById("sidemenu").style.right = "0";
  };

  const closemenu = () => {
    document.getElementById("sidemenu").style.right = "-200px";
  };

  return (
    <div id="header">
      <nav className="nav">
        <img src={Logo} className="logo" alt="Logo" />
        <ul id="sidemenu">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <i className="fa-solid fa-circle-xmark" onClick={closemenu}></i>
        </ul>
        <i className="fa-solid fa-bars" onClick={openmenu}></i>
      </nav>
      <div className="container">
        <div className="header-text">
          <h1>
            Hi, I am <span>Roshani</span><br />
            and I am a passionate
          </h1>
          <h1>
            <span id="element" ref={typedElement}></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
