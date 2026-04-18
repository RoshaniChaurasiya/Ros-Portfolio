import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import Typed from 'typed.js';
import Logo from '../Images/logo.jpeg';
import '../styles/Header.css';

const Header = memo(() => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typedElement.current && !typedInstance.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          "Frontend Developer",
          "React.js Developer",
          "Next.js Developer",
          "JavaScript Developer",
          "UI Engineer",
        ],
        typeSpeed: 90,
        startDelay: 300,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current && typeof typedInstance.current.destroy === 'function') {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, []);

  const handleMenuOpen = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [menuOpen]);

  return (
    <header id="header">
      <nav className="nav">
        <img src={Logo} className="logo" alt="Roshani Logo" />

        <ul id="sidemenu" className={menuOpen ? "open" : ""}>
          <li><a href="#header" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#services" onClick={handleNavClick}>Services</a></li>
          <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>

          <i 
            className="fa-solid fa-circle-xmark menu-icon close-icon" 
            onClick={handleMenuClose}
            role="button"
            tabIndex="0"
            aria-label="Close menu"
            onKeyDown={(e) => e.key === 'Enter' && handleMenuClose()}
          ></i>
        </ul>

        {!menuOpen && (
          <i 
            className="fa-solid fa-bars menu-icon open-icon" 
            onClick={handleMenuOpen}
            role="button"
            tabIndex="0"
            aria-label="Open menu"
            onKeyDown={(e) => e.key === 'Enter' && handleMenuOpen()}
          ></i>
        )}
      </nav>

      {menuOpen && <div className="overlay" onClick={handleMenuClose}></div>}

      <div className="container">
        <div className="header-content">
          <h1>Hi, I am <span className="name-highlight">Roshani</span></h1>
          <h2 className="typed-intro">
            and I am a <span ref={typedElement} id="element"></span>
          </h2>
          <p>
            Frontend developer with 2.6 years of experience building responsive
            and scalable web apps using React.js, Next.js, JavaScript, Redux,
            APIs, CSS, Bootstrap, Tailwind CSS, and Git.
          </p>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;