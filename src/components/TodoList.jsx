import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodoForm from './AddTodoForm';
import {jsPDF} from 'jspdf';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleComplete = async (id, completed) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/tasks/${id}`, {completed: !completed});
      console.log(response.data);
      fetchTasks();
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  const addTaskToList = (newTask) => {
    setTasks([...tasks, newTask]); 
  };

  const generatePDF = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/tasks');
      
      const doc = new jsPDF();
      
      doc.setFontSize(12);
      doc.text('Task List', 10, 10);
      
      let y = 20;
      data.forEach(task => {
        doc.text(`${task.title} - ${task.completed ? 'Completed' : 'Pending'}`, 10, y);
        y += 10;
      });

      doc.save('task-list.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do List</h1>
      <AddTodoForm className="textbox" onTaskAdded={addTaskToList} /> {}
      <button className="pdf-button" onClick={generatePDF}>Download Task List as PDF</button>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span className="task-title">{task.title}</span>
            <div className="task-actions">
              <input className="complete-checkbox" type="checkbox" checked={task.completed} onChange={() => handleComplete(task.id, task.completed)} />
              <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
