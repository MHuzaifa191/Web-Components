import React from 'react';
import './RegisterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <div className="input-container">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="continue-button">Sign Up</button>
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
