import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          Hello, I am Yaroslav Volvach, a software developer with a passion for
          creating innovative solutions. I have experience in React, Node.js,
          and Python, and I enjoy working on challenging projects.
        </p>
        <h2>Technical Skills</h2>
        <p>
          JavaScript, TypeScript, Python, CSS, HTML, Node.js, Express.js,
          Django, React, Bootstrap, SQL, PostgreSQL, MongoDB, Redis, DynamoDB,
          Git, Jira, Bitbucket, Docker, VS Code, PyCharm.
        </p>
        <h2>Experience</h2>
        <p>
          <strong>Calystral Games GmbH | Synergy of Serra</strong> <br />
          Full-Stack Developer (December 2022 – March 2024) <br />
          Responsibilities: Developed front-end components with React,
          incorporated Redux Saga, managed NFT metadata with JavaScript, and
          more.
        </p>
        <p>
          <strong>ARTEXGROUP</strong> <br />
          Software Engineer (January 2021 – November 2022) <br />
          Responsibilities: Developed backend with Python, set up APIs using
          Django, developed front-end components with React.js, and more.
        </p>
        <h2>Education</h2>
        <p>
          Master of Business Administration, Sumy State University (2018 – 2019){' '}
          <br />
          Certificate, Hillel IT School (2020 – 2021) <br />
          Certificate, University of Toronto School of Continuing Studies (2023)
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
