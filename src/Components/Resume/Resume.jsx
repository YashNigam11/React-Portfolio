import React, { useState } from "react";
import "./Resume.css";

function Resume() {
  const [activeButton, showActiveButton] = useState("education");

  const toggleButton = (button) => {
    showActiveButton(button);
  };
  return (
    <div className="resume-container">
      <div className="resume-heading" data-aos="fade-up">
        <div className="resume-heading-child">
          <h2>Resume</h2>
          <h6>My Formal Bio Details</h6>
        </div>
      </div>
      <div className="resume-details" data-aos="fade-down">
        <div className="resume-details-tagline">
          <div
            className="icon-w-tagline"
            onClick={() => toggleButton("education")}
          >
            <div className="icon">
              <i class="fa-solid fa-user-graduate"></i>
            </div>
            <div
              className={`btn-Edu ${
                activeButton === "education" ? "formatting-button" : ""
              }`}
            >
              Education
            </div>
          </div>
          <div className="icon-w-tagline" onClick={() => toggleButton("work")}>
            <div className="icon">
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div
              className={`btn-Edu ${
                activeButton === "work" ? "formatting-button" : ""
              }`}
            >
              Work History
            </div>
          </div>
          <div className="icon-w-tagline" onClick={() => toggleButton("skill")}>
            <div className="icon">
              <i class="fa-solid fa-computer"></i>
            </div>
            <div
              className={`btn-Edu ${
                activeButton === "skill" ? "formatting-button" : ""
              }`}
            >
              Programming Skills
            </div>
          </div>
          <div
            className="icon-w-tagline"
            onClick={() => toggleButton("project")}
          >
            <div className="icon">
              <i class="fa-solid fa-bars-progress"></i>
            </div>
            <div
              className={`btn-Edu ${
                activeButton === "project" ? "formatting-button" : ""
              }`}
            >
              Projects
            </div>
          </div>
          <div
            className="icon-w-tagline"
            onClick={() => toggleButton("interest")}
          >
            <div className="icon">
              <i class="fa-solid fa-palette"></i>
            </div>
            <div
              className={`btn-Edu ${
                activeButton === "interest" ? "formatting-button" : ""
              }`}
            >
              Interests
            </div>
          </div>
        </div>
        {activeButton === "education" ? (
          <div
            className={`education-details-text ${
              activeButton === "education" ? "active" : ""
            }`}
          >
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴Bharati Vidyapeeth College of Engineering, Pune</li>
                  <span> Bachelor of Technology</span>
                </ul>
              </div>
              <div className="educ-year">2018-2022</div>
            </div>
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴FLorets International School, Kanpur</li>
                  <span> Higher Secondary School</span>
                </ul>
              </div>
              <div className="educ-year">2017-2018</div>
            </div>
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴Maharana Pratap Education Centre, Kanpur</li>
                  <span> Senior Secondary School</span>
                </ul>
              </div>
              <div className="educ-year">2017-2018</div>
            </div>
          </div>
        ) : null}
        {activeButton === "work" ? (
          <div
            className={`work-details-text ${
              activeButton === "work" ? "active" : ""
            }`}
          >
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴Front End Developer</li>
                  <span> Mindstein</span>
                  <span>JULY-JANUARY</span>
                </ul>
              </div>
              <div className="work-year">2022-2023</div>
            </div>
          </div>
        ) : null}

        {activeButton === "skill" ? (
          <div
            className={`skill-details-text ${
              activeButton === "skill" ? "active" : ""
            }`}
          >
            <div className="details">
              <div className="text">
                <ul>
                  <li className="skills-list">🔴HTML5</li>
                  <li className="skills-list">🔴CSS3</li>
                  <li className="skills-list">🔴SCSS</li>
                  <li className="skills-list">🔴JAVASCRIPT</li>
                  <li className="skills-list">🔴BOOTSTRAP</li>
                  <li className="skills-list">🔴REACT.JS</li>
                  <li className="skills-list">🔴VERSION CONTROL SYSTEM(GIT)</li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}

        {activeButton === "project" ? (
          <div
            className={`project-details-text ${
              activeButton === "project" ? "active" : ""
            }`}
          >
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴Ecommerce Website</li>
                  <span> Own</span>
                  <span>December-Jan</span>
                </ul>
              </div>
              <div className="project-year">
                <a href="https://ecommerce-shopwebapp.netlify.app/">
                  Link <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴Weather Application</li>
                  <span> Own</span>
                  <span>JANUARY</span>
                </ul>
              </div>
              <div className="project-year">
                <a href="https://weather-app-97.netlify.app/">
                  Link <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="details">
              <div className="text">
                <ul>
                  <li>🔴Form-Builder Application</li>
                  <span> Own</span>
                  <span>October-Nov</span>
                </ul>
              </div>
              <div className="project-year">
                <a href="https://github.com/YashNigam11/Front-End-Projects/tree/main/form-builder">
                  Link <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {activeButton === "interest" ? (
          <div
            className={`interest-details-text ${
              activeButton === "interest" ? "active" : ""
            }`}
          >
            <div className="details">
              <div className="text">
                <ul>
                  <li className="interest">🔴Creativity</li>
                  <li className="interest">🔴Designing</li>
                  <li className="interest">🔴Coding</li>
                  <li className="interest">🔴Learning Languages</li>
                  <li className="interest">🔴Reading Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Resume;
