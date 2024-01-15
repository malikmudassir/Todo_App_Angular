# Todo App Frontend
This is the frontend part of the Todo App project, built with Angular. It provides a user interface for interacting with the backend API to manage tasks.

# Project Structure
The project consists of the following components and services:

# Components
todo-list: The main component that displays the list of tasks and provides the user with options to create, update, and delete tasks.

#Dialogs
create-todo-list-dialog: A dialog component that allows users to create a new task.

# Services
http-service: Handles HTTP requests to the backend API, including GET, POST, PATCH, and DELETE operations related to tasks.
data-service: Manages the data used by the components, including tasks and their states.

#Usage
To run this frontend project locally, follow these steps:

Clone this repository to your local machine.

Install the necessary dependencies using the following command:
npm install
ng serve
The frontend should now be running on http://localhost:4200.

Make sure the backend server is also running to handle API requests.

# Components and Services
# todo-list Component
Displays the list of tasks retrieved from the backend.

Allows users to create new tasks by clicking on the "Add Task" button, which opens the create-todo-list-dialog dialog.

Enables users to mark tasks as completed or delete tasks by clicking on the corresponding buttons.

# create-todo-list-dialog Dialog
Opens when the user wants to create a new task.

Provides a form for users to enter task details, including the task name, due date, and description.

Sends a POST request to the backend to create the task.

# http-service Service
Handles HTTP requests to the backend API for tasks.

Provides methods for GETting all tasks, POSTing a new task, PATCHing an existing task, and DELETEing a task.

# data-service Service
Manages the data used by components, including tasks and their states.

Provides methods for retrieving tasks and updating task states within the application.
