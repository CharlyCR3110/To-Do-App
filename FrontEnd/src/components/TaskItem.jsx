import React, { useState, useEffect } from 'react';
import '../styles/TaskItem.css';

export function TaskItem({ children, id, onTaskDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    let deleteTimeout;

    if (isChecked) {
      deleteTimeout = setTimeout(() => {
        onTaskDelete(id);
      }, 10000);
    }

    return () => clearTimeout(deleteTimeout);
  }, [isChecked, id, onTaskDelete]);


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
