import React, { useState } from 'react';
import './RegisterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle the register button click
  const handleRegister = () => {
    const { fullName, email, password, confirmPassword } = userData;

    // Simple validation
    if (!fullName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Save user data (including fullName) to localStorage
    localStorage.setItem('userData', JSON.stringify({ fullName, email, password }));

    alert('Registration successful!');

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleInputChange}
        />
        <button className="continue-button" onClick={handleRegister}>
          Sign Up
        </button>
      </div>
      <div className="or-container">
        <div className="line"></div>
        <span>Or</span>
        <div className="line"></div>
      </div>

      <div className="social-login-container">
        <button className="social-login-button">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          Sign Up with Email
        </button>
        <button className="social-login-button">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Sign Up with Google
        </button>
        <button className="social-login-button">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          Sign Up with Facebook
        </button>
        <button className="social-login-button">
          <FontAwesomeIcon icon={faApple} className="icon" />
          Sign Up with Apple
        </button>
      </div>
      <div className="login-account-container">
        <span>Already have an account?</span>
        <Link to="/"> Log In </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
