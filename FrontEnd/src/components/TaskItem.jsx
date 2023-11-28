import React, { useState, useEffect } from 'react';
import '../styles/TaskItem.css';

export function TaskItem({ children, id }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    let deleteTimeout;

    if (isChecked) {
      deleteTimeout = setTimeout(() => {
        // Lógica para eliminar la tarea de la base de datos
        console.log(`Tarea ${id} eliminada`);
        // Realizar la solicitud DELETE al servidor
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Tarea eliminada:', data);
          })
          .catch((error) => console.error('Error eliminando tarea:', error));
      }, 10000);
    }

    return () => clearTimeout(deleteTimeout);
  }, [isChecked, id]);


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
