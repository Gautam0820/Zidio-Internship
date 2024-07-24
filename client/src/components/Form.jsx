import React, { useState, useContext } from 'react';
import jsPDF from 'jspdf';
import { TemplateContext } from '../context/TemplateContext';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import './Form.css';

const Form = () => {
  const { selectedTemplate } = useContext(TemplateContext);

  const [personalDetails, setPersonalDetails] = useState({ name: '', email: '', phone: '', address: '' });
  const [education, setEducation] = useState(['']);
  const [experience, setExperience] = useState(['']);
  const [projects, setProjects] = useState(['']);
  const [skills, setSkills] = useState(['']);

  const handlePersonalDetailChange = (field, value) => {
    setPersonalDetails({ ...personalDetails, [field]: value });
  };

  const handleArrayChange = (setter, index, value) => {
    setter((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Define starting Y position
    let y = 10;
  
    // Apply styles based on selected template
    switch (selectedTemplate) {
      case 1:
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text('Professional Resume', 10, y);
        y += 10;
        break;
      case 2:
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 255);
        doc.text('Creative Resume', 10, y);
        y += 10;
        break;
      case 3:
        doc.setFontSize(18);
        doc.setTextColor(0, 100, 0);
        doc.text('Minimalist Resume', 10, y);
        y += 10;
        break;
      default:
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text('Resume', 10, y);
        y += 10;
        break;
    }
  
    // Add personal details
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Personal Details:', 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Name: ${personalDetails.name}`, 10, y);
    y += 10;
    doc.text(`Email: ${personalDetails.email}`, 10, y);
    y += 10;
    doc.text(`Phone: ${personalDetails.phone}`, 10, y);
    y += 10;
    doc.text(`Address: ${personalDetails.address}`, 10, y);
    y += 20; // Add extra space before next section
  
    // Add education details
    doc.setFontSize(14);
    doc.text('Education:', 10, y);
    y += 10;
    doc.setFontSize(12);
    education.forEach((edu, index) => {
      doc.text(`- ${edu}`, 10, y);
      y += 10;
    });
    y += 10; // Add extra space before next section
  
    // Add experience details
    doc.setFontSize(14);
    doc.text('Experience:', 10, y);
    y += 10;
    doc.setFontSize(12);
    experience.forEach((exp, index) => {
      doc.text(`- ${exp}`, 10, y);
      y += 10;
    });
    y += 10; // Add extra space before next section
  
    // Add projects details
    doc.setFontSize(14);
    doc.text('Projects:', 10, y);
    y += 10;
    doc.setFontSize(12);
    projects.forEach((proj, index) => {
      doc.text(`- ${proj}`, 10, y);
      y += 10;
    });
    y += 10; // Add extra space before next section
  
    // Add skills details
    doc.setFontSize(14);
    doc.text('Skills:', 10, y);
    y += 10;
    doc.setFontSize(12);
    skills.forEach((skill, index) => {
      doc.text(`- ${skill}`, 10, y);
      y += 10;
    });
  
    doc.save('resume.pdf');
  
    // Clear form data
    setPersonalDetails({ name: '', email: '', phone: '', address: '' });
    setEducation(['']);
    setExperience(['']);
    setProjects(['']);
    setSkills(['']);
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1:
        return <Template1 personalDetails={personalDetails} education={education} experience={experience} projects={projects} skills={skills} />;
      case 2:
        return <Template2 personalDetails={personalDetails} education={education} experience={experience} projects={projects} skills={skills} />;
      case 3:
        return <Template3 personalDetails={personalDetails} education={education} experience={experience} projects={projects} skills={skills} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2 className="heading">Resume Form</h2>
        <form onSubmit={handleSubmit}>
          <section className="section">
            <h3 className="section-heading">Personal Details</h3>
            <div className="form-group">
              <label className="label">Name:</label>
              <input type="text" className="input" value={personalDetails.name} onChange={(e) => handlePersonalDetailChange('name', e.target.value)} />
              <label className="label">Email:</label>
              <input type="email" className="input" value={personalDetails.email} onChange={(e) => handlePersonalDetailChange('email', e.target.value)} />
              <label className="label">Phone:</label>
              <input type="text" className="input" value={personalDetails.phone} onChange={(e) => handlePersonalDetailChange('phone', e.target.value)} />
              <label className="label">Address:</label>
              <input type="text" className="input" value={personalDetails.address} onChange={(e) => handlePersonalDetailChange('address', e.target.value)} />
            </div>
          </section>

          <section className="section">
            <h3 className="section-heading">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="form-group">
                <input type="text" className="input" value={edu} onChange={(e) => handleArrayChange(setEducation, index, e.target.value)} placeholder="Enter education detail" />
                <button type="button" className="delete-button" onClick={() => setEducation(education.filter((_, i) => i !== index))}>Delete</button>
              </div>
            ))}
            <button type="button" className="add-button" onClick={() => setEducation([...education, ''])}>Add Education</button>
          </section>

          <section className="section">
            <h3 className="section-heading">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="form-group">
                <input type="text" className="input" value={exp} onChange={(e) => handleArrayChange(setExperience, index, e.target.value)} placeholder="Enter experience detail" />
                <button type="button" className="delete-button" onClick={() => setExperience(experience.filter((_, i) => i !== index))}>Delete</button>
              </div>
            ))}
            <button type="button" className="add-button" onClick={() => setExperience([...experience, ''])}>Add Experience</button>
          </section>

          <section className="section">
            <h3 className="section-heading">Projects</h3>
            {projects.map((proj, index) => (
              <div key={index} className="form-group">
                <input type="text" className="input" value={proj} onChange={(e) => handleArrayChange(setProjects, index, e.target.value)} placeholder="Enter project detail" />
                <button type="button" className="delete-button" onClick={() => setProjects(projects.filter((_, i) => i !== index))}>Delete</button>
              </div>
            ))}
            <button type="button" className="add-button" onClick={() => setProjects([...projects, ''])}>Add Project</button>
          </section>

          <section className="section">
            <h3 className="section-heading">Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="form-group">
                <input type="text" className="input" value={skill} onChange={(e) => handleArrayChange(setSkills, index, e.target.value)} placeholder="Enter skill" />
                <button type="button" className="delete-button" onClick={() => setSkills(skills.filter((_, i) => i !== index))}>Delete</button>
              </div>
            ))}
            <button type="button" className="add-button" onClick={() => setSkills([...skills, ''])}>Add Skill</button>
          </section>

          <button type="submit" className="submit-button">Generate PDF</button>
        </form>
      </div>
      <div className="preview-container">
        <h2 className="heading">Resume Preview</h2>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Form;
