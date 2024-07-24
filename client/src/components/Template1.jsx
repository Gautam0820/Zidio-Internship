import React from 'react';
import './Template1.css';

const Template1 = ({ personalDetails, education, experience, projects, skills }) => {
  return (
    <div className="template1-container">
      <h1>{personalDetails.name}</h1>
      <p>Email: {personalDetails.email}</p>
      <p>Phone: {personalDetails.phone}</p>
      <p>Address: {personalDetails.address}</p>
      
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>

      <h2>Experience</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>

      <h2>Projects</h2>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>{proj}</li>
        ))}
      </ul>

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Template1;
