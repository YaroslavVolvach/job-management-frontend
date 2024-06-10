import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/CoverLetter.css';

const CoverLetter = ({ companyName, position }) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const phoneNumber = '+1 647 512 0813';
  const email = 'volvchya@gmail.com';

  return (
    <div>
      <Navbar />
      <div className="cover-letter">
        <h2>Cover Letter</h2>
        <p>Date: {today}</p>
        <p>
          {companyName}
          <br />
        </p>
        <p>Dear Hiring Manager,</p>
        <p>
          I am writing to express my interest in the {position} position at{' '}
          {companyName}. With over 3 years of experience in full-stack software
          development and a passion for leveraging technology to drive business
          growth, I am excited about the opportunity to contribute to your team
          and help propel ProfitFill's innovative product, ProfitFill, to new
          heights.
        </p>
        <p>
          Throughout my career, I have demonstrated proficiency in React,
          Node.js and Python among other technologies listed in the job
          description. My hands-on experience in developing AI systems and
          implementing advanced analytics solutions, including Google Analytics
          4 and Google Ads APIs, aligns closely with the requirements of the
          role. Moreover, my background in digital marketing principles has
          equipped me with a holistic understanding of the intersection between
          technology and business objectives.
        </p>
        <p>
          In my previous roles, I have successfully led product development
          initiatives, collaborated with cross-functional teams to define
          project scopes, and delivered high-quality software solutions within
          tight deadlines. My ability to troubleshoot complex issues, mentor
          junior developers, and present innovative ideas for product
          enhancement make me well-suited for the responsibilities outlined in
          the job description.
        </p>
        <p>
          I am particularly drawn to ProfitFill's hybrid work style and
          commitment to fostering a collaborative work environment. As someone
          who values continuous learning and embraces new challenges, I am eager
          to join a dynamic team that prioritizes innovation and excellence.
        </p>
        <p>
          Enclosed is my resume, which provides additional details about my
          professional background and accomplishments. I have also submitted the
          required exercise and video presentation through the provided
          application form.
        </p>
        <p>
          Thank you for considering my application. I am enthusiastic about the
          opportunity to discuss how my skills and experiences align with the
          needs of {companyName} further. Please feel free to contact me at{' '}
          {phoneNumber} or {email} to schedule an interview.
        </p>
        <p>
          Sincerely,
          <br />
          Yaroslav Volvach
          <br />
          3211 Centre St NW
          <br />
          Calgary, Alberta, T2E 2X5
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CoverLetter;
