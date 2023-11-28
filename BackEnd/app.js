import express from "express";
import cors from "cors";

import { getTasks, getTask, createTask, deleteTask } from './database.js';

const app = express();

app.use(cors());       // enable CORS
app.use(express.json());

// get all
app.get('/tasks', async (req, res) => {
    const tasks = await getTasks();
    res.send(tasks);
});

// get one
app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const task = await getTask(id);
    res.send(task);
});

// create one
app.post('/tasks', async (req, res) => {
    const { description } = req.body;
    const newTask = await createTask(description);
    res.status(201).send(newTask);
});

// delete one
app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await deleteTask(id);
        if (result > 0) {
            res.status(200).send(`Task with ID ${id} deleted successfully`);
        } else {
            res.status(404).send(`Task with ID ${id} not found`);
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!\n', err.message);
});

app.listen(3000, () => { 
    console.log("Server running on port 3000");
});