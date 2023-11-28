import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();


export async function getTasks() {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return rows;
}

export async function getTask(id) {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    return rows[0];
}

export async function createTask(description) {
    const result = await pool.query('INSERT INTO tasks (description) VALUES (?)', [description]);
    return getTask(result[0].insertId);
}

export async function deleteTask(id) {
    const result = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    return result[0].affectedRows;
}