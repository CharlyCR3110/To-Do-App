import React, { useState } from 'react';
import '../styles/TaskItem.css';

export function TaskItem({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const itemClassNames = isChecked ? 'item item-done' : 'item';

  return (
    <div className={itemClassNames}>
      <div className="item-done-check">
        <input
          type="checkbox"
          id="item-done-check"
          name="item-done-check"
          checked={isChecked}
        />
        <span onClick={handleCheckboxChange}></span>
      </div>
      <label htmlFor="item-done-check" className="item-label">
        {children}
      </label>
    </div>
  );
}
