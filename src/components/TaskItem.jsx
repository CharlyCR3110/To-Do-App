import React, { useState } from 'react';
import '../styles/TaskItem.css';

export function TaskItem({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="item">
      <div className="item-done-check" onClick={handleCheckboxChange}>
        <input
          type="checkbox"
          id="item-done-check"
          name="item-done-check"
          checked={isChecked}
        />
        <span></span>
      </div>
      <label htmlFor="item-done-check" className="item-label">
        {children}
      </label>
    </div>
  );
}
