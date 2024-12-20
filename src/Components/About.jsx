import React from 'react';
import './About.css';

import { Link, useNavigate } from 'react-router-dom'; 
import { getAuth, signOut } from "firebase/auth";
import app from './Firebase';


const About = () => {



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
        <div className='About-main'>
          <nav className="landing-nav-main">
                <div className="landing-logo">StockSense</div>
                <ul className="nav-links-main">
                  <li><Link to="/Main">Home</Link></li> 
                  <li><Link to="/about">About Us</Link></li> 
                  <li><Link onClick={changetofeatures}>Features</Link></li> 
                  <li><Link onClick={goout}>Logout</Link></li> 
                </ul>
              </nav>



            <div className="about-container">
                <div className="about-heading">
                    <h1>About Our Inventory Management System</h1>
                    <h3>Empowering businesses with smart inventory solutions for better management and growth</h3>
                </div>
                <div className="about-our">
                    <div className="part1 part">
                        <h2>Our Mission</h2>
                        <p>To provide businesses with powerful, user-friendly inventory management tools that streamline operations, reduce costs, and drive sustainable growth. We're committed to making inventory management accessible to businesses of all sizes.</p>
                    </div>
                    <div className="part2 part">
                        <h2>Our Vision</h2>
                        <p>To become the leading inventory management solution globally, known for innovation, reliability, and exceptional customer service. We envision a future where every business can efficiently manage their inventory with ease.</p>
                    </div>
                </div>
                <div className="boxes">
                    <div className="box1 box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-12 h-12 text-blue-600">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                        </svg>
                        <h2>Modern Solution</h2>
                        <p>Built with the latest technology for optimal performance and reliability</p>
                    </div>
                    <div className="box2 box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-12 h-12 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <h2>User-Friendly</h2>
                        <p>Intuitive interface designed for users of all technical backgrounds</p>
                    </div>
                    <div className="box3 box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target w-12 h-12 text-blue-600"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        <h2>Accurate Tracking</h2>
                        <p>Real-time inventory tracking with advanced analytics and reporting</p>
                    </div>
                    <div className="box4 box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-12 h-12 text-blue-600"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                        <h2>Premium Support</h2>
                        <p>Dedicated customer support team available to help you succeed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
