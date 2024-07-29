// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title-services">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-brands fa-react"></i>
            <h2>React Developer</h2>
            <p>I specialize in building modern UI components with React to enhance application performance. I leverage my expertise in JavaScript, HTML, and CSS, and work closely with testers, designers, and project managers to create robust and effective applications.</p>
          </div>
          <div>
            <i className="fa-brands fa-js"></i>
            <h2>Frontend Developer</h2>
            <p>As a frontend developer, I design and structure web pages, ensuring a balance between functional and aesthetic design. My goal is to create visually appealing and user-friendly websites.</p>
          </div>
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>UI Developer</h2>
            <p>I apply interactive and visual design principles to websites and web applications, aiming for a cohesive user experience. Using HTML, CSS, and various design tools, I achieve responsive and engaging designs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
