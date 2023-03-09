import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemsNeeded = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.givefood.org.uk/api/2/foodbanks/');
      console.log('Foodbanks response:', response.data);
      const foodbanks = response.data.results;
      const needs = await Promise.all(
        foodbanks.map(async foodbank => {
          const needsResponse = await axios.get(`https://www.givefood.org.uk/api/2/need/${foodbank.id}/`);
          return needsResponse.data;
        })
      );
      console.log('Needs:', needs);
      const mergedNeeds = needs.reduce((acc, curr) => [...acc, ...curr], []);
      setItems(mergedNeeds);
    };
    fetchData();
  }, []);

  console.log('Items:', items);

  return (
    <div>
      <h2>Items Needed</h2>
      <table>
        <thead>
          <tr>
            <th>Food Bank</th>
            <th>Item</th>
            <th>Location</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.foodbank_name}</td>
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
