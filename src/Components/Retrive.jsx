import React, { useEffect, useState } from 'react';
import { database } from './Firebase';
import { ref, get, update } from 'firebase/database';
import './Retrive.css';

const Retrive = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [removeQuantity, setRemoveQuantity] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const itemsRef = ref(database, 'inventory');
      const snapshot = await get(itemsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const itemsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setItems(itemsArray);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!selectedItem || !removeQuantity) {
      setError('Please select an item and enter a quantity.');
      return;
    }

    try {
      const item = items.find((item) => item.id === selectedItem);
      if (!item) {
        setError('Selected item not found.');
        return;
      }

      if (parseInt(removeQuantity) > item.quantity) {
        setError('Not enough stock to remove.');
        return;
      }

      const newQuantity = item.quantity - parseInt(removeQuantity);
      const itemRef = ref(database, `inventory/${selectedItem}`);
      await update(itemRef, {
        quantity: newQuantity,
      });

      alert(`Updated successfully! Remaining quantity: ${newQuantity}`);
      setRemoveQuantity('');
      fetchItems();
    } catch (error) {
      console.error('Error updating quantity:', error);
      setError('An error occurred while updating the item.');
    }
  };

  return (
    <div className="retrieve-update-container">
      
      <h1>Retrieve and Update Items</h1>
      <form onSubmit={handleSubmit} className="retrieve-update-form">
        <div className="form-group">
          <label>Select Item:</label>
          <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} required>
            <option value="">-- Select an Item --</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.itemsname}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Quantity to Remove:</label>
          <input
            type="number"
            value={removeQuantity}
            onChange={(e) => setRemoveQuantity(e.target.value)}
            min="1"
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="update-btn">Remove Quantity</button>
      </form>

      <h2>Current Items</h2>
      <table className="items-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.itemsname}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Retrive;
