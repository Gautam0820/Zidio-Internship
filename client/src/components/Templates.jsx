import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TemplateContext } from '../context/TemplateContext';
import './Templates.css';

const Templates = () => {
  const { setSelectedTemplate } = useContext(TemplateContext);
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: 'Professional',
      description: 'A clean and professional template perfect for corporate job applications.',
      imageUrl: 'https://img.freepik.com/free-psd/professional-resume-template_237398-220.jpg',
    },
    {
      id: 2,
      name: 'Creative',
      description: 'A modern and creative template ideal for creative roles and industries.',
      imageUrl: 'https://img.freepik.com/free-vector/blue-curriculum-vitae-template_23-2148812835.jpg',
    },
    {
      id: 3,
      name: 'Minimalist',
      description: 'A simple and minimalist template for those who prefer a clean look.',
      imageUrl: 'https://img.freepik.com/free-vector/elegant-resume-template_1435-1245.jpg',
    },
  ];

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    localStorage.setItem('selectedTemplate', templateId);
    navigate('/form');
  };

  return (
    <div className="templates-container">
      <h1>Select a Template</h1>
      <div className="templates-grid">
        {templates.map((template) => (
          <div key={template.id} className="template-card">
            <img src={template.imageUrl} alt={template.name} className="template-image" />
            <div className="template-info">
              <h2>{template.name}</h2>
              <p>{template.description}</p>
              <button onClick={() => handleSelectTemplate(template.id)} className="select-button">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
