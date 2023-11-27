// TaskList.js
import React, { useState } from "react";
import { TaskItem } from "./TaskItem";
import { TaskCreationBar } from "./TaskCreationBar";

export function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Example task",
    },
  ]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        description: newTask,
      },
    ]);
  };

  return (
    <div>
      <section className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id}>{task.description}</TaskItem>
        ))}
      </section>
      <TaskCreationBar onTaskCreate={addTask} />
    </div>
  );
}
