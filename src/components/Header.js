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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const openmenu = () => setMenuOpen(true);
  const closemenu = () => setMenuOpen(false);

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <header id="header">
      <nav aria-label="Primary navigation" className="nav">
        <img src={Logo} className="logo" alt="Logo" />

        <ul
          id="sidemenu"
          className={menuOpen ? "open" : ""}
          role="menu"
          aria-expanded={menuOpen}
        >
          <li><a href="#header" onClick={closemenu} role="menuitem">Home</a></li>
          <li><a href="#about" onClick={closemenu} role="menuitem">About</a></li>
          <li><a href="#services" onClick={closemenu} role="menuitem">Services</a></li>
          <li><a href="#portfolio" onClick={closemenu} role="menuitem">Portfolio</a></li>
          <li><a href="#contact" onClick={closemenu} role="menuitem">Contact</a></li>

          <i
            className="fa-solid fa-circle-xmark menu-icon close-icon"
            onClick={closemenu}
            onKeyDown={e => handleKeyDown(e, closemenu)}
            role="button"
            tabIndex="0"
            aria-label="Close menu"
          ></i>
        </ul>

        {!menuOpen && (
          <i
            className="fa-solid fa-bars menu-icon open-icon"
            onClick={openmenu}
            onKeyDown={e => handleKeyDown(e, openmenu)}
            role="button"
            tabIndex="0"
            aria-label="Open menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
          ></i>
        )}
      </nav>

      <div className="container">
        <div className="header-content">
          <h1>
            Hi, I am <span className="name-highlight">Roshani</span>
          </h1>
          <h2 className="typed-intro">
            and I am a <span ref={typedElement} id="element"></span>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;