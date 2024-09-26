import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';  // Ensure this is the correct path to your LoginPage file
import RegisterPage from './RegisterPage';  // Add this line to import RegisterPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Ensure the RegisterPage is used here */}
      </Routes>
    </Router>
  );
};

export default App;
