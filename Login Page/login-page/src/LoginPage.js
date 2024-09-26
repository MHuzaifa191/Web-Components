import React, { useState } from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle login
  const handleLogin = () => {
    // Get the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (storedUser) {
      // Check if entered credentials match stored credentials
      if (storedUser.email === credentials.email && storedUser.password === credentials.password) {
        alert('Login successful!');
        // Redirect to a dashboard or another page after successful login
        navigate('/dashboard');
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('No user found. Please register.');
    }
  };

  return (
    <div className="login-container">
      <h1>Log in</h1>
      <div className="input-container">
        <input
          type="text"
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
        <button className="continue-button" onClick={handleLogin}>
          Continue
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
          Login with Email
        </button>
        <button className="social-login-button">
          <FontAwesomeIcon icon={faGoogle} className="icon" />
          Login with Google
        </button>
        <button className="social-login-button">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          Login with Facebook
        </button>
        <button className="social-login-button">
          <FontAwesomeIcon icon={faApple} className="icon" />
          Login with Apple
        </button>
      </div>
      <div className="create-account-container">
        <span>Don't have an account?</span>
        <Link to="/register"> Create an Account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
