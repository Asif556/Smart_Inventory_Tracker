import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import app from './Firebase';
import './Features.css';
import { Link, useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();

  function goout() {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      alert("Signed out successfully");
      navigate('/'); 
    });
  }

  return (
    <div className="features-page">
      <div className="featurs-nav">
        <nav className="landing-nav-main">
          <div className="landing-logo">StockSense</div>
          <ul className="nav-links-main">
            <li><Link to="/Main">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link onClick={goout}>Logout</Link></li>
          </ul>
        </nav>
      </div>

      <div className="features-heading">
        <h1>Our Features</h1>
        <p>Discover the powerful tools that make inventory management effortless</p>
      </div>

      <div className="all-features-1">
        <div className="feature-section" onClick={() => navigate('/additems')}>
          <div className="feature-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus w-8 h-8 mb-4 text-blue-600">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
              <path d="M12 8v8"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h2>Add Items</h2>
            <p>Easily add new items to your inventory with detailed categorization and tracking capabilities.</p>
          </div>
        </div>

        <div className="feature-section" onClick={() => navigate('/predict')}>
          <div className="feature-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="rgb(234 88 12)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-8 h-8 mb-4 text-orange-600">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <div className="feature-content">
            <h2>Predict Price</h2>
            <p>Utilize AI-powered tools to predict prices and optimize inventory decisions effortlessly.</p>
          </div>
        </div>

        <div className="feature-section" onClick={() => navigate('/retrive')}>
          <div className="feature-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="rgb(22 163 74)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-search w-8 h-8 mb-4 text-green-600">
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
              <path d="m7.5 4.27 9 5.15"></path>
              <polyline points="3.29 7 12 12 20.71 7"></polyline>
              <line x1="12" x2="12" y1="22" y2="12"></line>
              <circle cx="18.5" cy="15.5" r="2.5"></circle>
              <path d="M20.27 17.27 22 19"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h2>Retrieve Items</h2>
            <p>Quick and efficient item lookup system with advanced search and filtering options.</p>
          </div>
        </div>
      </div>

      <div className="all-features-2">
        <div className="feature-section" onClick={() => navigate('/display')}>
          <div className="feature-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="rgb(147 51 234)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-checks w-8 h-8 mb-4 text-purple-600">
              <path d="m3 17 2 2 4-4"></path>
              <path d="m3 7 2 2 4-4"></path>
              <path d="M13 6h8"></path>
              <path d="M13 12h8"></path>
              <path d="M13 18h8"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h2>Display Items</h2>
            <p>Comprehensive view of your inventory with customizable display options and sorting capabilities.</p>
          </div>
        </div>

        <div className="feature-section" onClick={() => navigate('/check')}>
          <div className="feature-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgb(220 38 38)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer-sun w-8 h-8 mb-4 text-red-600">
              <path d="M12 9a4 4 0 0 0-2 7.5"></path>
              <path d="M12 3v2"></path>
              <path d="m6.6 18.4-1.4 1.4"></path>
              <path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
              <path d="M4 13H2"></path>
              <path d="M6.34 7.34 4.93 5.93"></path>
            </svg>
          </div>
          <div className="feature-content">
            <h2>Check Freshness</h2>
            <p>Automated freshness monitoring system for perishable items with alerts and notifications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
