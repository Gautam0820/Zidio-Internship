import React from 'react';

import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <>
     
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our Resume Builder!</p>
        <p>Our website offers the following features:</p>
        <ul>
          <li>Create professional resumes with ease.</li>
          <li>Choose from multiple resume templates.</li>
          <li>Real-time preview of your resume.</li>
          <li>Download your resume as a PDF.</li>
          <li>Secure user authentication and authorization.</li>
        </ul>
        <p>We aim to help you build the perfect resume to land your dream job.</p>
      </div>
      
    </>
  );
};

export default AboutUsPage;
