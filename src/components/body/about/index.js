import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
import coding from '../../../assets/image/coding.png';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello👋, I am a developer and <br />
          <span className="info-name">Computer Science student.</span>.<br /> I love web
          development and <br/> working on impactful products. <br/> Driven by impact and purpose. <br/> Building for the future.
        </div>
        <div className="about-photo">
          <img
            //src={require("../../../assets/image/coding.jpg").default}
            src={coding}
            className="picture"
            alt=""
          />
        </div>
      </div>
      <SocialContact /> 
    </div>
  );
}

export default About;
