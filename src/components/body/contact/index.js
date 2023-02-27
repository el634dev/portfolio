import React from "react";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";

function Contact() {
  return(
    <div className="contact">
      <Separator />
      <label className="section-title">Education</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Dominican University of California</p>
          <p>Completing computer science coursework towards a Bachelor's of Science in Applied Computer Science</p>
          <p>App Academy Open</p>
          <p>Software development bootcamp covering web development over 24 weeks</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf").default}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
