import React, { useState, useEffect } from 'react';
import './Predict_price.css';

import { getAuth, signOut } from "firebase/auth";
import app from './Firebase';

import { Link, useNavigate } from 'react-router-dom';
import { database } from './Firebase';
import { ref, onValue } from 'firebase/database';

const Predict_Price = () => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [item, setItem] = useState('');
  const [inventory, setInventory] = useState([]);
  const [predictedvalue,setPredict]=useState()
  
  const navigate = useNavigate();





  useEffect(() => {
    const itemsRef = ref(database, 'inventory');
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setInventory(formattedList);
      } else {
        setInventory([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handlePrediction = async () => {
    if (!item || !quantity) {
      alert('Please select a fruit and enter quantity!');
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch(`/predict/${quantity}/${item}`); 

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      setLoading(false);
      setPredict(data.predicted_price);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching prediction:', error);
      alert('There was an error fetching the prediction.');
    }
  };
  

  function goout() {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      alert("Signed out successfully");
      navigate('/');
    });
  }

  useEffect(() => {
    console.log('Inventory state updated:', inventory);
  }, [inventory]);

  return (
    <div className="predict-main">
      <div className="featurs-nav">
        <nav className="landing-nav-main">
          <div className="landing-logo">StockSense</div>
          <ul className="nav-links-main">
            <li><Link to="/Main">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link onClick={goout}>Logout</Link></li>
          </ul>
        </nav>
      </div>
      <div className="predict-container">
        <div className="predict-heading">
          <h2>Predict Price</h2>
        </div>
        <div className="predict-form">
          <div className="predict-input">
            Select item:
            <select 
              name="option-select" 
              value={item} 
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="">Choose an item</option>
              {inventory.length > 0 ? (
                inventory.map((item, index) => (
                  <option key={index} value={item.itemsname}>
                    {item.itemsname}
                  </option>
                ))
              ) : (
                <option>No items available</option>
              )}
            </select>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter the Quantity"
            />
          </div>
          <div className="display_prediction">
            {predictedvalue}
          </div>
          <div className="predict-buttons">
            <button className='Cancel-predict' onClick={() => { setItem(''); setQuantity(''); }}>Cancel</button>
            <button className='price-predict' onClick={handlePrediction}>
              {loading ? <div className="spinner"></div> : 'Predict Price'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict_Price;
