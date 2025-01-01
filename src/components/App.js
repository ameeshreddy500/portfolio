import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Remove Layout import if not using it
import HomePage from './HomePage';
import ProfessionalSummary from './ProfessionalSummary';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/professional-summary" element={<ProfessionalSummary />} />
        <Route path="/projects-summary" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;