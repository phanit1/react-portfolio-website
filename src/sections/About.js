import React from "react";
import "./About.css";
import Resume from "../assets/resume.pdf";
import MyImage from "../assets/mypic.jpg";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={MyImage} alt="Description" />
        </div>
        <div className="about-description">
          <h1>About Me</h1>
          <p>
            Experienced Full Stack Developer with over three plus years of expertise
            in developing and deploying robust web applications. Specializes in
            utilizing technologies such as React and Node.js and implementing
            cloud-based solutions using Azure PowerShell. Proficient in
            optimizing development processes through Azure DevOps and CI/CD
            pipelines to ensure the continuous delivery of highquality software
            solutions. Collaborative team player dedicated to staying updated
            with industry trends to enhance development practices.
          </p>
          <div className="extra-text">
            <a href={Resume} download="resume.pdf" className="download-resume">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
