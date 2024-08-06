import React from "react";
import "./Certifications.css";
import ListGroup from 'react-bootstrap/ListGroup';

const Certifications = () => {
    const certificates = [
        { title: "Frontend Developer (React) Role Certificate from Hacker Rank", link: "https://www.hackerrank.com/certificates/6a23b41a066f" },
        { title: "React Basic Skill Assessment Certificate from Hacker Rank", link: "https://www.hackerrank.com/certificates/deaff7eccd06" },
        { title: "Angular Basic Skill Assessment Certificate from Hacker Rank", link: "https://www.hackerrank.com/certificates/b7bc68149fe8" },
        { title: "Javascript Basic Skill Assessment Certificate from Hacker Rank", link: "https://www.hackerrank.com/certificates/a57007e01c10" },
        { title: "Problem Solving Basic Skill Assessment Certificate from Hacker Rank", link: "https://www.hackerrank.com/certificates/364758c56eaf" },
        { title: "SQL Basic Skill Assessment Certificate from Hacker Rank", link: "https://www.hackerrank.com/certificates/1e0ef361a911" }

      ];
  return (
    <div id="certifications" className="certifications">
      <h1>Certifications</h1>
      <ListGroup>
        {certificates.map((cert, index) => (
          <ListGroup.Item variant="info" key={index}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              {cert.title}
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Certifications;
