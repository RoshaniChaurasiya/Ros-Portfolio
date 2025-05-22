import React, { useRef, useState } from 'react';
import { sendForm } from '@emailjs/browser';
import Resume from '../Images/Roshani Resume.pdf';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      'service_qlw4q1f',
      'template_mwrkjx3',
      form.current,
      'GOokHLGNl-ddpGY8u'
    )
      .then(() => {
        setStatusMessage('Message sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        setStatusMessage('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title-contact">Get In Touch</h1>
            <p><i className="fa-solid fa-envelope"></i> roshni.chaurasiya2111@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> 88819 01986</p>
            <p>
              <a
                href="https://www.linkedin.com/in/roshani-chaurasiya-4318532a4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
            </p>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              download="Roshani Resume.pdf"
              className="btn btn2"
            >
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  aria-label="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Enter your email"
                  aria-label="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  aria-label="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn2">Send Message</button>
              {statusMessage && <p className="status-message">{statusMessage}</p>}
            </form>
          </div>
        </div>
      </div>

      <footer className="copyright">
        <p>© 2025 Portfolio. All Rights Reserved.</p>
      </footer>

      <a
        href="https://wa.me/918881901986"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </section>
  );
};

export default Contact;