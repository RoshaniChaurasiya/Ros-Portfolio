import React, { memo } from 'react';
import '../styles/Services.css';

const Services = memo(() => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h1 className="sub-title-services">My Services</h1>
        <div className="services-list">
          <article className="service-card" tabIndex={0} aria-label="React and Next.js Development">
            <i className="fa-brands fa-react service-icon" aria-hidden="true"></i>
            <h2>React & Next.js Development</h2>
            <p>
              I build fast, component-driven web applications using React.js and
              Next.js, with clean structure and scalable architecture for long-term
              maintainability.
            </p>
          </article>

          <article className="service-card" tabIndex={0} aria-label="API and Redux Integration">
            <i className="fa-brands fa-js service-icon" aria-hidden="true"></i>
            <h2>API & Redux Integration</h2>
            <p>
              I integrate REST APIs and manage application state with Redux to
              deliver smooth, data-driven user experiences and predictable app behavior.
            </p>
          </article>

          <article className="service-card" tabIndex={0} aria-label="Responsive UI Development">
            <i className="fa-solid fa-code service-icon" aria-hidden="true"></i>
            <h2>Responsive UI Development</h2>
            <p>
              I create mobile-first and responsive interfaces using CSS, Bootstrap,
              and Tailwind CSS so your product looks great on every device.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
export default Services;