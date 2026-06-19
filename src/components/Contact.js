import React, { useRef, useState, useCallback, memo } from "react";
import { sendForm } from "@emailjs/browser";
import { profile } from "../data/profile";
import "../styles/Contact.css";

const contactLinks = [
  {
    icon: "fa-solid fa-envelope",
    label: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    icon: "fa-solid fa-phone",
    label: profile.phone,
    href: profile.phoneHref
  },
  {
    icon: "fa-solid fa-globe",
    label: "roshani-portfolio.netlify.app",
    href: profile.portfolio
  },
  {
    icon: "fa-brands fa-linkedin",
    label: "LinkedIn",
    href: profile.linkedIn
  }
];

const Contact = memo(() => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    const nameInput = form.current?.elements["from_name"];
    const emailInput = form.current?.elements["reply_to"];
    const messageInput = form.current?.elements["message"];

    if (!nameInput?.value.trim()) {
      newErrors.name = "Name is required";
    }

    if (!emailInput?.value.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!messageInput?.value.trim()) {
      newErrors.message = "Message is required";
    } else if (messageInput.value.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  const sendEmail = useCallback((e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatusMessage("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    setStatusMessage("");
    setErrors({});

    sendForm(
      "service_qlw4q1f",
      "template_mwrkjx3",
      form.current,
      "GOokHLGNl-ddpGY8u"
    )
      .then(() => {
        setStatusMessage("Success: Message sent successfully! I'll get back to you soon.");
        form.current.reset();
        setLoading(false);
        setTimeout(() => setStatusMessage(""), 5000);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setStatusMessage("Error: Failed to send message. Please try again or contact me directly.");
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
              {contactLinks.map((item) => (
                <p key={item.label}>
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </p>
              ))}
            </div>
            <div className="contact-actions">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                download="RoshaniResume.pdf"
                className="btn btn2"
                aria-label="Download resume"
              >
                <i className="fa-solid fa-download"></i> Download Resume
              </a>
            </div>
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
                  onFocus={() => setErrors({ ...errors, name: "" })}
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
                  onFocus={() => setErrors({ ...errors, email: "" })}
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
                  onFocus={() => setErrors({ ...errors, message: "" })}
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
                <p className={`status-message ${statusMessage.startsWith("Success") ? "status-success" : "status-error"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="copyright">
        <p>Copyright 2026 Portfolio. All Rights Reserved.</p>
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

Contact.displayName = "Contact";
export default Contact;
