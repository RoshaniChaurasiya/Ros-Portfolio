// src/components/About.js
import React from 'react';
import aboutImg from '../Images/About.jpg'

const About = () => {
  const openTab = (event, tabname) => {
    document.querySelectorAll('.tab-links').forEach(tablink => tablink.classList.remove('active-link'));
    document.querySelectorAll('.tab-contents').forEach(tabcontent => tabcontent.classList.remove('active-tab'));
    document.getElementById(tabname).classList.add('active-tab');
    event.currentTarget.classList.add('active-link');
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={aboutImg} alt="About" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title-about">About Me</h1>
            <ul>
              <li>I specialize in frontend development, particularly focusing on React to create seamless and visually captivating user interfaces.</li>
              <li>With a solid foundation in HTML, CSS, and JavaScript, I take pride in crafting elegant and efficient solutions for web applications.</li>
              <li>Continuously staying abreast of emerging technologies and industry best practices, I am committed to delivering high-quality work that exceeds expectations.</li>
              <li>My goal is to contribute my expertise to projects that not only meet but surpass user needs, elevating the standards of frontend development in the process.</li>
            </ul>

            <div className="tab-titles">
              <p className="tab-links active-link" onClick={(e) => openTab(e, 'skills')}>Skills</p>
              <p className="tab-links" onClick={(e) => openTab(e, 'experience')}>Experience</p>
              <p className="tab-links" onClick={(e) => openTab(e, 'education')}>Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>JavaScript <span>- Dynamic behavior and interactivity</span></li>
                <li>React <span>- Component-based UI development</span></li>
                <li>Next.js <span>- React framework for server-side rendering</span></li>
                <li>CSS <span>- Styling and layout for web pages</span></li>
                <li>Bootstrap <span>- CSS framework for responsive design</span></li>
                <li>Material-UI <span>- React components for faster and easier web development</span></li>
                <li>Git <span>- Version control system for tracking changes in source code</span></li>
              </ul>
            </div>

            <div className="tab-contents" id="experience">
              <ul>
                <li><span>2022 - Present</span><br />Nextpage IT Solutions Pvt Ltd. - React Developer</li>
                <li><span>2022 - 2022</span><br />Function Up</li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li><span>2018 - 2021</span><br />B.Sc - Udai Pratap College</li>
                <li><span>2017 - 2018</span><br />XII - State Board</li>
                <li><span>2015 - 2016</span><br />X - State Board</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
