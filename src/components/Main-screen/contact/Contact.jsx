import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        <div className='footer-left'>
          <h2>Job Fair 2026</h2>
          <span className='event-date'>12 février 2026</span>
          <div className="contact-logos">
            <img src='/images & logos/iso-logo.png' alt='iso' />
            <img
              src='/images & logos/nv-logo.png'
              alt='nv'
              style={{ width: "200px" }}
            />
          </div>
        </div>

        <div className='footer-right'>
          <p>
            ©2026 Job Fair. All Rights Reserved. Designed by{" "}
            <strong>Adem ARFAOUI & Ahlem Ben ABDALLAH</strong>.
          </p>
          <div className='footer-links'>
            <a href='#'>Terms of use</a>
            <span>•</span>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
