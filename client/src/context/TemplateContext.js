import React, { createContext, useState } from 'react';

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  return (
    <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};
