import React, { useRef, useState, useCallback, memo } from 'react';
import { sendForm } from '@emailjs/browser';
import Resume from '../Images/Roshani Resume.pdf';
import '../styles/Contact.css';

const Contact = memo(() => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateForm = useCallback(() => {
    const newErrors = {};
    const nameInput = form.current?.elements['from_name'];
    const emailInput = form.current?.elements['reply_to'];
    const messageInput = form.current?.elements['message'];

    if (!nameInput?.value.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!emailInput?.value.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!messageInput?.value.trim()) {
      newErrors.message = 'Message is required';
    } else if (messageInput.value.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  const sendEmail = useCallback((e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatusMessage('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    setStatusMessage('');
    setErrors({});

    sendForm(
      'service_qlw4q1f',
      'template_mwrkjx3',
      form.current,
      'GOokHLGNl-ddpGY8u'
    )
      .then(() => {
        setStatusMessage('✓ Message sent successfully! I\'ll get back to you soon.');
        form.current.reset();
        setLoading(false);
        setTimeout(() => setStatusMessage(''), 5000);
      })
      .catch((error) => {
        console.error('Email Error:', error);
        setStatusMessage('✗ Failed to send message. Please try again or contact me directly.');
        setLoading(false);
      });
  }, [validateForm]);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title-contact">Get In Touch</h1>
            <div className="contact-info">
              <p>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:roshni.chaurasiya2111@gmail.com">roshni.chaurasiya2111@gmail.com</a>
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+918881901986">+91 88819 01986</a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/roshani-chaurasiya-4318532a4"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit LinkedIn profile"
                >
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
              </p>
            </div>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              download="Roshani Resume.pdf"
              className="btn btn2"
              aria-label="Download resume"
            >
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} noValidate aria-label="Contact form">
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  aria-label="Your Name"
                  disabled={loading}
                  onFocus={() => setErrors({ ...errors, name: '' })}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Enter your email"
                  aria-label="Your Email"
                  disabled={loading}
                  onFocus={() => setErrors({ ...errors, email: '' })}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  disabled={loading}
                  minLength="10"
                  onFocus={() => setErrors({ ...errors, message: '' })}
                  aria-label="Your Message"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn2" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>

              {statusMessage && (
                <p className={`status-message ${statusMessage.includes("✓") ? "status-success" : "status-error"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="copyright">
        <p>© 2026 Portfolio. All Rights Reserved.</p>
      </footer>

      <a
        href="https://wa.me/918881901986"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
        title="Open WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;