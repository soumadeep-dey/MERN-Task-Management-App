# Fullstack Task Management Application

![React.js](https://img.shields.io/badge/Frontend-React.js-61DAFB) ![React Hooks](https://img.shields.io/badge/Hooks-React_Hooks-BBE9FF) ![Bootstrap v5](https://img.shields.io/badge/CSS_framework-Bootstrap_v5-a144ff)
![Node.js](https://img.shields.io/badge/JS_Env-Node.js-5FA04E) ![Express.js](https://img.shields.io/badge/Framework-Express.js-blue) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-237a3b) ![Mongoose](https://img.shields.io/badge/ODM-Mongoose-darkred) ![Postman](https://img.shields.io/badge/API_Testing-Postman-FF7F3E)  ![CORS](https://img.shields.io/badge/CORS-cors-FFF5E1) ![Vercel](https://img.shields.io/badge/Deployement-Vercel-black)

#### 🔗 _[Task Management Application](https://task-management-app-sd.vercel.app/)_

This is a fullstack task management application built with a focus on efficiency and ease of use. It allows users to create, update, delete, and manage tasks seamlessly through a well-structured frontend and backend architecture.

## Features

- **Create Task:** Users can add new tasks with descriptions and due dates.
- **Update Task:** Ability to modify task details such as description, status, and due date.
- **Delete Task:** Users can remove tasks that are no longer needed.
- **Check/Uncheck Task:** Tasks can be marked as done or undone, providing clear status tracking.

## Technologies Used

### Frontend

- **React:** Utilized for building a dynamic and responsive user interface.
- **Bootstrap:** Ensures a clean and modern UI design with responsive layout components.
- **React Hooks:** Used to manage stateful logic within functional components, improving code readability and maintainability.
- **Axios:** Facilitates asynchronous HTTP requests to the backend API, ensuring smooth data flow between frontend and backend.

### Backend

- **Node.js:** Powers the server-side logic with its event-driven, non-blocking I/O model, ideal for scalable applications.
- **Express.js:** Used as the web application framework to establish robust APIs quickly and easily.
- **MongoDB:** Chosen as the database to store task data, providing flexibility and scalability for handling large volumes of data efficiently.
- **Mongoose:** An elegant MongoDB object modeling tool designed to work in an asynchronous environment, simplifying interactions with MongoDB.
- **cors:** Middleware used to enable cross-origin resource sharing, ensuring that frontend and backend can communicate securely.
- **dotenv:** Allows for environment variable management, enhancing security and configuration flexibility.
- **Postman:** Used for testing API endpoints during development, ensuring API reliability and functionality.

## API Endpoints

The backend API includes the following endpoints:

- `POST /tasks:` Creates a new task.
- `GET /tasks:` Retrieves a list of all tasks.
- `PUT /tasks/:id` : Updates a specific task identified by ID.
- `DELETE /tasks/:id` : Deletes a specific task identified by ID.
