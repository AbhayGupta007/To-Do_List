// backend/server.js
import express from "express";
import pg from "pg";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

// PostgreSQL setup
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_app',
  password: 'Abh@y9654197008',
  port: 5432,
});
db.connect();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/tasks', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM tasks');
    const tasks = result.rows;
    res.json(tasks);

  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

app.post('/api/tasks', async (req, res) => {
  const { task } = req.body;
  try {
    const result = await db.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [task]);
    const newTask = result.rows[0];
    res.json(newTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Error adding task' });
  }
});

app.patch('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('UPDATE tasks SET completed = true WHERE id = $1 RETURNING *', [id]);
    const updatedTask = result.rows[0];
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Error updating task' });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Error deleting task' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
