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
          <p>Open Source Society University </p>
          <p>Completing computer science coursework inlcuding: Intro CS, Core CS, Advanced CS, Final Project</p>
          <p>App Academy Open</p>
          <p>Web development bootcamp spanning over 24 weeks</p>
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