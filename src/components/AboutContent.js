import React from "react";
import CodingProfile from "./Coding-Profile";
import resume from "../assets/Resume.pdf"

const AboutContent = () => {
  return (
    <div className="about-section">
      <div className="about">
        <div className="intro">
          <h1>Who am I?</h1>
          <p>
            I am a Web developer Looking for new oppurtunities to learn and grow
            my skills
          </p>
          <a href={resume} download className="btn">
            Download CV
          </a>
        </div>
      </div>
      <CodingProfile />
    </div>
  );
};

export default AboutContent;
