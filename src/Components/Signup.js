import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faTimes,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCloseModal } from './signin-context';
import './LoginForm.css'; 
import LoginModal from './LoginModal';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername]=useState('')
  const {showModal1,setShowModal1,showModal2,setShowModal2} = useCloseModal();
  const openModal2 = () =>{
    setShowModal1(true)
    setShowModal2(true)
}
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

  return (
    <div className="login-container">
      <div className="login-form">
        <FontAwesomeIcon
            icon={faTimes} 
            className="close-button"
            onClick={()=>setShowModal1(false)}
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
              placeholder='Enter your email'
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input
              type="text"
              id="Username"
              name="Username"
              value={username}
              onChange={handleInputChange}
              placeholder='Choose a preferred username'
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
              placeholder='Choose a strong password'
            />
            <div>
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className="eye-icon"
                />
            </div>
            
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          <button className='submit-btn' type="submit">Continue</button>

          <div className="signup-link">
            <h1 onClick={openModal2}>Already have an account? <span className='login-btns'>Login <FontAwesomeIcon icon={faArrowRight} /> </span></h1>
            { showModal2 && <LoginModal/>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
