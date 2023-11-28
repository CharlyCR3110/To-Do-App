import express from "express";

import { getTasks, getTask, createTask } from './database.js';

const app = express();

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
    const result = await deleteTask(id);
    res.send(result);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!\n', err.message);
});

app.listen(3000, () => { 
    console.log("Server running on port 3000");
});