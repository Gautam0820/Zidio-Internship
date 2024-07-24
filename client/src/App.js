import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import Form from './components/Form';
import Templates from './components/Templates';
import { TemplateProvider } from './context/TemplateContext';
import Layout from './components/Layout'; // Import the Layout component

const App = () => {
  return (
    <Router>
      <TemplateProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page with login/signup */}
            <Route path="/aboutus" element={<AboutUsPage />} /> {/* About us page */}
            <Route path="/form" element={<Form />} /> {/* Form page */}
            <Route path="/templates" element={<Templates />} /> {/* Templates page */}
            {/* Add other routes as needed */}
          </Routes>
        </Layout>
      </TemplateProvider>
    </Router>
  );
};

export default App;
