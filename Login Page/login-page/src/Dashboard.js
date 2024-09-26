import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Optional: Create a CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));
  
  // If userData doesn't exist, redirect to the login page
  if (!userData) {
    navigate('/'); // Redirect to login if no user data is found
    return null; // Render nothing while redirecting
  }

  const { fullName } = userData; // Extract fullName from userData

  return (
    <div className="dashboard-container">
      <h1>Welcome, {fullName}!</h1>
      <p>Glad to have you here. This is your dashboard.</p>
      {/* Add additional dashboard content or features here */}
    </div>
  );
};

export default Dashboard;
