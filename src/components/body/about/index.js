import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello👋, I am a developer <br />
          <span className="info-name">and Computer Science student.</span>.<br /> I love
          development with the web and working on products that lower the barriers. <br/> Driven by impact and purpose. Building for the future.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
