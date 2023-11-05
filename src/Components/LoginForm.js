import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faTimes } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css'; 
import { useCloseModal } from './signin-context';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {showModal1,setShowModal1,setShowModal2} = useCloseModal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const closeModal= () =>{
    setShowModal1(false)
    setShowModal2(false)
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <FontAwesomeIcon
            icon={faTimes} 
            className="close-button"
            onClick={closeModal}
            />
        <h1>Welcome Back</h1>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder='Enter your email or username'
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder='Enter your password'
            />
            <div>
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="eye-icon"
                />
            </div>
            
            <a className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          <button className='submit-btn'><Link to='/comment'>Login</Link></button>

          <div className="signup-link">
            <a>Don't have an account? Sign up here</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
