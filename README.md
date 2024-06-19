
# Todo List Application Setup and Start Instructions

This is a Todo List application built with React on the frontend and Node.js with Express and PostgreSQL on the backend.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- PostgreSQL

## Backend Setup

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/AbhayGupta007/To-Do_List.git
   cd To-Do_List
   \`\`\`

2. **Navigate to the backend directory:**

   \`\`\`bash
   cd backend
   \`\`\`

3. **Install backend dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

4. **Set up PostgreSQL:**

   - Create a PostgreSQL database named \`todo_app\`.
   - In the database, create a table named \`tasks\`:

     \`\`\`sql
     CREATE TABLE tasks (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       completed BOOLEAN DEFAULT FALSE
     );
     \`\`\`

   - Update the database connection details in \`backend/server.js\`:

     \`\`\`javascript
     const db = new pg.Client({
       user: 'postgres',
       host: 'localhost',
       database: 'todo_app',
       password: 'your_password',
       port: 5432,
     });
     \`\`\`

5. **Start the backend server:**

   \`\`\`bash
   nodemon server.js
   \`\`\`

   The backend server will start running at \`http://localhost:5000\`.

## Frontend Setup

1. **Navigate to the frontend directory in a different terminal:**

   \`\`\`bash
   cd ../frontend
   \`\`\`

2. **Install frontend dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Start the frontend development server:**

   \`\`\`bash
   npm run dev
   \`\`\`

   The frontend server will start running at \`http://localhost:3000\`.

## Using the Application

1. **Open your web browser** and navigate to \`http://localhost:3000\`.
2. You should see the Todo List application interface.
3. Use the application to:
   - View tasks
   - Add new tasks
   - Mark tasks as completed
   - Delete tasks
   - Download the task list as a PDF
