#Todo List Application
Setup and Start Instructions
This is a Todo List application built with React on the frontend and Node.js with Express and PostgreSQL on the backend.

Prerequisites
Before running the application, make sure you have the following installed:

Node.js and npm (Node Package Manager)
PostgreSQL

#Backend Setup
1. Clone the repository:

git clone 'https://github.com/AbhayGupta007/To-Do_List.git'
cd To-Do_List

2. Navigate to the backend directory:
cd backend

3. Install backend dependencies:
npm install

#Set up PostgreSQL:

1. Create a PostgreSQL database named todo_app.

2. In the database create a table named tasks: 
CREATE TABLE tasks(
	id SERIAL PRIMARY KEY, 
	title VARCHAR(255) NOT NULL, 
	completed BOOLEAN DEFAULT FALSE
);

3. Update the database connection details in backend/server.js:

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_app',
  password: 'your_password',
  port: 5432,
});

4. Start the backend server:
nodemon server.js

The backend server will start running at http://localhost:5000.

#Frontend Setup
1. Navigate to the frontend directory in different terminal:

cd ../frontend

2. Install frontend dependencies:
npm install

3. Start the frontend development server:

npm run dev

The frontend server will start running at http://localhost:3000.

#Using the Application
Open your web browser and navigate to http://localhost:3000.
You should see the Todo List application interface.
Use the application to view tasks, add new tasks, mark tasks as completed, delete tasks, and download the task list as a PDF.