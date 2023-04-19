import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vidxzyr",
        "template_bqqtmbk",
        form.current,
        "7TaIlXNE_LqKcwv4y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      // e.target.reset()
  };
  return (
    <div className="contact-container">
      <div className="contact-heading" data-aos="fade-up">
        <div className="contact-heading-child">
          <h2>Contact Me </h2>
          <h6>Lets Keep In Touch</h6>
        </div>
      </div>
      <div className="contact-sec">
        <div className="contact-bg">
          <h3>Get in Touch 🤝|</h3>
          <div className="contact-social-media">
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
          <div className="contact-img">
            <h3>Send Message</h3>
            <img src="" alt="contact" />
          </div>
        </div>
        <div className="contact-form" data-aos="fade-right">
          <form ref={form} onSubmit={sendEmail} >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" />
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" />
            <button >
              Send Me <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
