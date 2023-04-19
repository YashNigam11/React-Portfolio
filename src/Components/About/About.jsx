import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({durations: 4000})
  });
  return (
    <div className="about-container" >
      <div className="about-heading" data-aos="fade-up">
        <div className="about-heading-child">
          <h2>About Me </h2>
          <h6>Why Choose Me?</h6>
        </div>
      </div>
      <div className="about-me-sec" data-aos="fade-up">
        <div className="image-sec" data-aos="fade-left">
          <img src={require(
            '../../assets/About/academic.jpg'
          )} alt="academic-profile" />
        </div>
        <div className="me-sec" data-aos="fade-right">
          <div className="academic-info">
            <p>
              {" "}
              Front End Web and Mobile Application with the background knowledge
              of HTML, CSS, SCSS, BOOTSTRAP and REACTJS with Redux, along with a
              knack of building application with utmost efficiency. Strong
              professional with a B.TECH willing to be an Asset for an
              organisation.{" "}
            </p>
          </div>
          <div className="academic-keys">
            <ul>
              <li>🔴 Front End Web and Mobile Development</li>
              <li>🔴 Interactive Front End as Design</li>
              <li>🔴 React and Bootstrap</li>
              <li>🔴 Redux for State Management</li>
              <li>🔴 REST API</li>
            </ul>
          </div>
          <div className="academic-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Yash_Nigam_Resume.pdf" download>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
