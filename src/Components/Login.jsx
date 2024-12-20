import React, { useState, useEffect } from 'react';
import './Login.css'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './Firebase';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const auth = getAuth(app);
  const navigate = useNavigate();



  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: ['Hello👋', 'Welcome Back😎'],
      autoStart: true,
      loop: true, 
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main'); 
    } catch (error) {
      alert('Email and Password do not match or there was an issue with login');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="type">
        <span id="typewriter"></span>
      </div>
      <div className="login-box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="footer">
          <p>
            Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
