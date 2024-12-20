import React, { useState, useEffect } from "react";
import "./Display.css";
import { database } from "./Firebase";
import { ref, onValue } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";
import app from './Firebase'
import { useNavigate } from "react-router";

const Display = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [present, setPresent] = useState(false);

  useEffect(() => {
    const itemsRef = ref(database, "inventory");
    const unsubscribe = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        const groupedItems = formattedList.reduce((acc, item) => {
          const existingItem = acc.find((i) => i.name === item.itemsname);
          if (existingItem) {
            existingItem.quantity = parseInt(existingItem.quantity) + parseInt(item.quantity);
          } else {
            acc.push({ name: item.itemsname, quantity: item.quantity, description: item.description });
          }
          return acc;
        }, []);

        setList(groupedItems);
      } else {
        setList([]);
      }
    });

    return () => unsubscribe(); 
  }, []);

  const displayItems = () => {
    const selectedItem = list.find((item) => item.name === name);
    if (selectedItem) {
      setDisplayList([selectedItem]);
      setPresent(true);
    } else {
      setDisplayList([]);
      setPresent(false);
    }
  };

  const handleRemoveFromDisplay = (id) => {
    const updatedDisplayList = displayList.filter((item) => item.id !== id);
    setDisplayList(updatedDisplayList);

    if (updatedDisplayList.length === 0) {
      setPresent(false);
    }
  };


  const auth = getAuth(app);
function goout(){
  signOut(auth).then(() => {
    alert("sign out succesfully")
  }).then(
    a('/')
  )
}
let a=useNavigate()
  function changetofeatures(){
    a('/Features')

  }
  return (
    <div className="full">

      
<nav className="landing-nav-main">
        <div className="landing-logo">StockSense</div>
        <ul className="nav-links-main">
          <li><a href="/main">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a onClick={changetofeatures}>Features</a></li>
          <li><a href="#logout" onClick={goout}>Logout</a></li>
        </ul>
      </nav>
    <div className="container">


      <div className="header">
        <h1>Inventory Items</h1>
        <p>View and manage your inventory items below</p>
      </div>
      <div className="display-select">
        <h3 className="writeselect">Select :</h3>
        <select name="Items-selection" onChange={(e) => setName(e.target.value)}>
          <option value="">Select an Item</option>
          {list.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <button onClick={displayItems}>Display</button>
      </div>

      {present && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayList.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn delete"
                        onClick={() => handleRemoveFromDisplay(item.id)}
                      >
                        Remove from Display
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )}
    </div>
    </div>
  );
};

export default Display;
