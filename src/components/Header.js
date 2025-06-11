import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Logo from '../Images/logo.jpeg';

const Header = () => {
  const typedElement = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Software Developer",
        "Frontend Developer",
        "React Developer",
        "UI Developer",
        "HTML Developer",
      ],
      typeSpeed: 90,
      startDelay: 300,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const openmenu = () => setMenuOpen(true);
  const closemenu = () => setMenuOpen(false);

  return (
    <header id="header">
      <nav className="nav">
        <img src={Logo} className="logo" alt="Logo" />

        <ul id="sidemenu" className={menuOpen ? "open" : ""}>
          <li><a href="#header" onClick={closemenu}>Home</a></li>
          <li><a href="#about" onClick={closemenu}>About</a></li>
          <li><a href="#services" onClick={closemenu}>Services</a></li>
          <li><a href="#portfolio" onClick={closemenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={closemenu}>Contact</a></li>

          <i className="fa-solid fa-circle-xmark menu-icon close-icon" onClick={closemenu}></i>
        </ul>

        {!menuOpen && (
          <i className="fa-solid fa-bars menu-icon open-icon" onClick={openmenu}></i>
        )}
      </nav>

      {menuOpen && <div className="overlay" onClick={closemenu}></div>}

      <div className="container">
        <div className="header-content">
          <h1>Hi, I am <span className="name-highlight">Roshani</span></h1>
          <h2 className="typed-intro">
            and I am a <span ref={typedElement} id="element"></span>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;