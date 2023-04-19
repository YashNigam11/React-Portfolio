import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonial-container" data-aos="fade-up">
      <div className="testimonial-heading">
        <div className="testimonial-heading-child">
          <h2>Testimonials</h2>
          <h6>What my clients says about me</h6>
          <hr />
        </div>
      </div>
      <div className="testimonial-carousel">
        <div className="carousel-wrapper">
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p>
                "Excellent job! The project was completed on time and within
                budget. Impressed by the creativity and innovation. Would
                recommend to anyone."
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="https://via.placeholder.com/50x50"
                alt="Testimonial author"
              />
              <h4>John Doe</h4>
              <span>CEO, Company XYZ</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p>
                "Highly recommended! The team went above and beyond my
                expectations. Professional and efficient. Will definitely use
                again in the future."
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="https://via.placeholder.com/50x50"
                alt="Testimonial author"
              />
              <h4>Jane Smith</h4>
              <span>CTO, Company ABC</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p>
                "Top-notch service! I appreciate the level of dedication and
                expertise. Reliable and trustworthy. They delivered exactly what
                I was looking for"
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="https://via.placeholder.com/50x50"
                alt="Testimonial author"
              />
              <h4>Bob Johnson</h4>
              <span>COO, Company QRS</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              <p>
                "Outstanding work! The quality and attention to detail is
                impressive. Great communication throughout the project. Very
                satisfied with the outcome"
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="https://via.placeholder.com/50x50"
                alt="Testimonial author"
              />
              <h4>Bob Johnson</h4>
              <span>COO, Company QRS</span>
            </div>
          </div>
        </div>
        <div className="carousel-controls">
          <button className="prev-slide">Prev</button>
          <button className="next-slide">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
