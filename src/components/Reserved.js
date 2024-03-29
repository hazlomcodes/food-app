import React, { useState } from 'react';
import '../styles/reserved.css';

function Reserved() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ['Apple', 'Banana', 'Tea', 'Coffee'];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item;
      })
    : '';

  // Return classes based on whether item is checked
  let isChecked = (item) => (checked.includes(item) ? 'checked-item' : 'not-checked-item');

  return (
    <div className="reserved">
      <div className="checkList">
        <div className="title">Would you like to reserve this item?:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>{`You have reserved: ${checkedItems}`}</div>
      <button className="reservation-form__submit-button" type="submit">
        Submit
      </button>
    </div>
  );
}

export default Reserved;
