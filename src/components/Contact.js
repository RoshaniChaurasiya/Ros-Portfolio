// src/components/Contact.js
import React from 'react';
import Resume from '../Images/RoshaniResume.pdf'

const Contact = () => {
  return (
    <React.Fragment>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title-contact">Contact Me</h1>
              <p>
                <i className="fa-solid fa-envelope"></i>
                roshni.chaurasiya2111@gmail.com
              </p>
              <p><i className="fa-solid fa-phone"></i>88819 01986</p>
              <p>
                <a href="https://www.linkedin.com/in/roshani-chaurasiya-4318532a4"><i
                  className="fa-brands fa-linkedin"></i>Linkedin</a>
              </p>
              <a href={Resume} target="_blank" rel="noreferrer" download="Roshani Resume.pdf" className="btn btn2">
                Download CV...</a>
            </div>
            <div className="contact-right">
              <form>
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright <i className="fa-regular fa-copyright"></i> 2024 Portfolio. All
            Rights Reserved.
          </p>
        </div>
      </div>
      {/* WhatsApp Button  */}
      <a href="https://wa.me/918881901986" target="_blank" rel="noreferrer" className="whatsapp-button">
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </React.Fragment>
  );
};

export default Contact;
