import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div id="resume" className="resume">
      <h1>Resume</h1>
      <section>
        <h2>Work Experience</h2>
        <p>Details about your work experience.</p>
      </section>
      <section>
        <h2>Education</h2>
        <p>Details about your education.</p>
      </section>
      <section>
        <h2>Skills</h2>
        <p>Details about your skills.</p>
      </section>
    </div>
  );
}

export default Resume;