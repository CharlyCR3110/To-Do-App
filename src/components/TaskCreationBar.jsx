import React from "react";
import "../styles/TaskCreationBar.css";

export function TaskCreationBar({ onTaskCreate }) {
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      // get the input value
      const newTask = event.target.value;
      // clear the input
      event.target.value = "";
      // add the task to the list in TaskList
      onTaskCreate(newTask);
    }
  };

  return (
    <div className="task-creation-bar">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="task-creation-bar-input"
        onKeyDown={handleEnterKey}
      />
    </div>
  );
}