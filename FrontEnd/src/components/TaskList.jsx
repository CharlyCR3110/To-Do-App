import React, { useState, useEffect } from "react";
import { TaskItem } from "./TaskItem";
import { TaskCreationBar } from "./TaskCreationBar";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener las tareas al cargar el componente
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []); // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente.

  const addTask = (newTask) => {
    // Realiza una solicitud para crear una nueva tarea
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: newTask }),
    })
      .then((response) => response.json())
      .then((data) => setTasks((prevTasks) => [...prevTasks, data]))
      .catch((error) => console.error("Error creating task:", error));
  };

  return (
    <div>
      <section className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id}>{task.description}</TaskItem>
        ))}
      </section>
      <TaskCreationBar onTaskCreate={addTask} />
    </div>
  );
}
