import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h1 className="sub-title-services">My Services</h1>
        <div className="services-list">
          <article className="service-card" tabIndex={0} aria-label="React Developer">
            <i className="fa-brands fa-react service-icon" aria-hidden="true"></i>
            <h2>React Developer</h2>
            <p>
              I specialize in building modern UI components with React to enhance application performance.
              I leverage my expertise in JavaScript, HTML, and CSS, and work closely with testers, designers,
              and project managers to create robust and effective applications.
            </p>
          </article>

          <article className="service-card" tabIndex={0} aria-label="Frontend Developer">
            <i className="fa-brands fa-js service-icon" aria-hidden="true"></i>
            <h2>Frontend Developer</h2>
            <p>
              As a frontend developer, I design and structure web pages, ensuring a balance between functional
              and aesthetic design. My goal is to create visually appealing and user-friendly websites.
            </p>
          </article>

          <article className="service-card" tabIndex={0} aria-label="UI Developer">
            <i className="fa-solid fa-code service-icon" aria-hidden="true"></i>
            <h2>UI Developer</h2>
            <p>
              I apply interactive and visual design principles to websites and web applications,
              aiming for a cohesive user experience. Using HTML, CSS, and various design tools,
              I achieve responsive and engaging designs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;