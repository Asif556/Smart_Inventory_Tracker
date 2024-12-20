import React, { useState } from 'react';
import './Additems.css';
import { getDatabase, ref, set, get } from "firebase/database";

const Additems = () => {
  const [itemsname, setitemname] = useState('');
  const [quantity, setquantity] = useState('');
  const [description, setdescription] = useState('');
  const [loading, setLoading] = useState(false);

  const database = getDatabase();
  const submit = () => {
    if (itemsname && quantity && description) {
      setLoading(true);

      const itemRef = ref(database, 'inventory/' + itemsname);

      get(itemRef).then((snapshot) => {
        if (snapshot.exists()) {
          
          const existingData = snapshot.val();
          const newQuantity = parseInt(existingData.quantity) + parseInt(quantity);

          set(itemRef, {
            itemsname: itemsname,
            quantity: newQuantity.toString(),
            description: description,
          }).then(() => {
            setLoading(false);
            setitemname('');
            setquantity('');
            setdescription('');
            alert('Item updated successfully');
          }).catch((error) => {
            setLoading(false);
            alert('Error updating item: ' + error.message);
          });
        } else {
          const itemId = new Date().getTime(); 

          set(ref(database, 'inventory/' + itemId), {
            itemsname: itemsname,
            quantity: quantity,
            description: description,
          }).then(() => {
            setLoading(false);
            setitemname('');
            setquantity('');
            setdescription('');
            alert('Item added successfully');
          }).catch((error) => {
            setLoading(false);
            alert('Error adding item: ' + error.message);
          });
        }
      }).catch((error) => {
        setLoading(false);
        alert('Error checking item: ' + error.message);
      });
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className='Additems-main'>
      <div className="Additems-Heading">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 24 24" fill="none" stroke="#2764EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus h-16 w-16 text-blue-600">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
        <h1>Add New Item</h1>
        <p>Enter the details of your new inventory item below</p>
      </div>

      <div className="Additems-form">
        <div className="form-heading">
          <h2>Item Information</h2>
        </div>
        <div className="input-section">
          <label>
            Item Name:
            <input
              type="text"
              value={itemsname}
              placeholder="Enter Item Name"
              onChange={(e) => setitemname(e.target.value)}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              placeholder="Enter quantity"
              onChange={(e) => setquantity(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              placeholder="Enter item Description"
              onChange={(e) => setdescription(e.target.value)}
            />
          </label>
        </div>
        <div className="Additems-buttons">
          <button
            className="cancel"
            onClick={() => {
              setitemname('');
              setquantity('');
              setdescription('');
            }}
          >
            Cancel
          </button>
          <button
            className="Add-button"
            onClick={submit}
            disabled={loading} 
          >
            {loading ? 'Adding...' : 'Add Item'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Additems;
