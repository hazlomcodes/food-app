import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemsNeeded = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.givefood.org.uk/api/2/need/e0798fd7/', {
        params: {
          api_key: 'YOUR_API_KEY'
        }
      });
      setItems(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Items Needed</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Location</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.location_name}</td>
              <td>{item.needed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsNeeded;
