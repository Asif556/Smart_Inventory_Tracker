import React, { useState } from 'react';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); 
  const auth = getAuth(app);
  const a=useNavigate()

  function change(n){
    a(`/${n}`)
  }

  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: ['Hello', 'Welcome Back'],
      autoStart: true,
      loop: true, 
    });

    return () => {
      typewriter.stop();
    };
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();  

    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(
        alert("signup succesfull")
      ).then(
        a('/')
      )
     
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
        <div className="type2">
      <span id="typewriter"></span>
      </div>

      <div className="signup-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

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
                type={showPassword ? "text" : "password"}
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

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="footer">
          <p>
            Already have an account? <span onClick={()=>change('')}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
