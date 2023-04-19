import React from "react";
import "./Profile.css";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parents">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.yashnigam282@gmail.com">
                <i class="fa-regular fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/yashnigam7/">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="https://www.linkedin.com/in/yashnigam7/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.github.com/in/yashnigam7/">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Yash Nigam</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🤖",
                    1500,
                    "Front End Developer 💻",
                    1500,
                    "Web Developer 😎",
                    1500,
                    "UI/UX Developer 🖼️",
                    1500,
                    "React Developer📱",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building Applications with Front End Operation
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Yash_Nigam_Resume.pdf" download>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
          
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
      </div>
    </div>
  );
}
