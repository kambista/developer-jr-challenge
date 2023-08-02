import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql
    .createPool({
        host: process.env.DB_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD,
        port: process.env.DB_PORT,
    })
    .promise();


async function createTodo(title, description) {
    try {
        const query = 'INSERT INTO todos (title, description) VALUES (?, ?)';
        const result = await pool.query(query, [title, description]);
        return result.insertId;
    } catch (error) {
        throw new Error('Error al crear la tarea: ' + error.message);
    }
    }

async function getTodos() {
    try {
        const query = 'SELECT * FROM todos';
        const [rows] = await pool.query(query);
        return rows;
    } catch (error) {
        throw new Error('Error al obtener las tareas: ' + error.message);
    }
    }

async function getTodoById(id) {
    try {
        const query = 'SELECT * FROM todos WHERE id = ?';
        const [rows] = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        throw new Error('Error al obtener la tarea: ' + error.message);
    }
    }

async function updateTodo(id, title, description, completed) {
    try {
        const query =
        'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?';
        const result = await pool.query(query, [title, description, completed, id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error al actualizar la tarea: ' + error.message);
    }
    }

async function deleteTodoById(id) {
    try {
        const query = 'DELETE FROM todos WHERE id = ?';
        const result = await pool.query(query, [id]);
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error al eliminar la tarea: ' + error.message);
    }
    }