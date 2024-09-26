import React from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Log in</h1>
      <div className="input-container">
        <input type="text" placeholder="Phone Number or Email Address" />
        <input type="password" placeholder="Password" />
        <button className="continue-button">Continue</button>
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
        {/* Link to the register page */}
        <Link to="/register"> Create an Account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
