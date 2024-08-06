import React from "react";
import "./Home.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="home .navbar-nav-scroll">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Phaneendhar. A passionate Front End Developer, currently working
        at ValueMomentum Service PVt Ltd
      </p>
      <ul className="list-inline" style={{ color: "aliceblue" }}>
        <li className="list-inline-item">
          <a href= "https://www.instagram.com/tphani1/" >
            <FaInstagram
              style={{
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
            </a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/phaneendhar-thota-9b3005168/">
            <FaLinkedin
              style={{
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.github.com/phanit1">
            <FaGithub
              style={{
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://www.hackerrank.com/Phaneendhar">
            <FaHackerrank
              style={{
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a href="tel:7893434970">
            <FaPhoneAlt
              style={{
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://wa.me/+917893434970">
            <FaWhatsapp
              style={{
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
