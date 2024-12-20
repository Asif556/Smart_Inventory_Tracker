import React from 'react';
import './Landing.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { getAuth, signOut } from "firebase/auth";
import app from './Firebase';

const Landing = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  function goout() {
    signOut(auth).then(() => {
      alert("Signed out successfully");
      navigate('/'); 
    });
  }
  function changetofeatures() {
    navigate('/features');
  }

  return (
    <div className="Landing-main">
      <nav className="landing-nav-main">
        <div className="landing-logo">StockSense</div>
        <ul className="nav-links-main">
          <li><Link to="/Main">Home</Link></li> 
          <li><Link to="/about">About Us</Link></li> 
          <li><Link onClick={changetofeatures}>Features</Link></li> 
          <li><Link onClick={goout}>Logout</Link></li> 
        </ul>
      </nav>

      <div className="main-section-writeups">
        <div className="content-text">
          <h1>
            Machine learning-powered inventory management system for efficient item tracking, pricing prediction, and freshness verification in digital enterprises.
          </h1>
          <p>
            Create and deliver intelligent service solutions across inventory management and beyond using machine learning and automation.
          </p>
          <button className="cta-button" onClick={changetofeatures}>Try Our Features</button>
        </div>
        <div className="background-image-inpng">
          <img src="Invo.png" alt="Custom Background" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
