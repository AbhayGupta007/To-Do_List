import React, { useState } from 'react';
import axios from 'axios';

const AddTodoForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', { task });
      onTaskAdded(response.data);
      setTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="textbox">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
            required
          />
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;