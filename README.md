# User Management Dashboard

This is a simple web application where users can view, add, edit, and delete user details by interacting with a mock backend API (`JSONPlaceholder`). The application is built using React and demonstrates CRUD operations.

---

## **Table of Contents**

1. [Objective](#objective)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Directory Structure](#directory-structure)
6. [Functionality](#functionality)
7. [Error Handling](#error-handling)
8. [Challenges & Improvements](#challenges--improvements)

---

## **Objective**

The primary goal of this project is to develop a responsive, modular, and user-friendly interface for managing user data. It interacts with the `/users` endpoint of the `JSONPlaceholder` API to perform the following operations:

- View all users
- Add a new user
- Edit existing user details
- Delete a user

---

## **Features**

1. **User Interface:**

   - Displays a table with user details: ID, First Name, Last Name, Email, and Department.
   - Buttons to "Add", "Edit", and "Delete" users.

2. **Backend Interaction:**

   - Fetches user data from the `/users` endpoint.
   - Adds new users using a `POST` request.
   - Updates existing users using a `PUT` request.
   - Deletes users using a `DELETE` request.

3. **Error Handling:**

   - Displays friendly error messages in case of failed API requests.

4. **Bonus Features:**

   - Client-side validation for form inputs.
   - Responsive UI with a clean design.
   - Pagination for handling a large number of users.

---

## **Technologies Used**

- **Frontend:** React (using `create-react-app`)
- **HTTP Client:** Fetch API
- **Routing:** React Router DOM
- **Styling:** CSS (media queries)
- **Mock Backend:** JSONPlaceholder API

---

## **Setup Instructions**

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd user-management-dashboard
   ```
2. **Install Dependencies**
   npm install

3. **Run the Project**
   npm start

4. **Access the Application: Open http://localhost:3000 in your browser.**

**DIRECTORY STRUCTURE** 
src/
├── components/
│   ├── App.js              # Main application wrapper
│   ├── UserList.js         # Component to display users
│   ├── UserForm.js         # Component for add/edit functionality
│   └── ErrorBoundary.js    # Component to catch and display errors
├── services/
│   └── api.js              # API interactions using Axios
├── styles/
│   └── App.css             # Application-wide styling
└── index.js                # React DOM entry point


#  **Functionality**

1. **Viewing Users**
Fetches users from /users endpoint when the component mounts.
Displays the user list in a table with options to "Edit" and "Delete."

2. **Adding Users**
Opens a form to input new user details.
Validates inputs before sending a POST request to /users.
Updates the state to simulate the addition.

3. **Editing Users**
Populates the form with existing user details.
Sends a PUT request to /users/{id} to update the data.
Updates the state to reflect changes.

4. **Deleting Users**
Sends a DELETE request to /users/{id}.
Removes the user from the state to simulate deletion.

# **Error Handling**
Try-Catch Blocks: Around API calls to handle unexpected errors.
Error State: Stores errors and displays user-friendly messages via the ErrorBoundary component.


# Challenges & Improvements

**Challenges:**
Handling state updates for a simulated backend where changes aren't persisted.
Ensuring smooth transitions between adding and editing users.

**Improvements:**
Backend Integration: Replace the mock API with a real backend for persistent data storage.
Advanced Features: Add authentication, role-based access, and advanced filtering options.
Optimizations: Use React Query or Redux Toolkit for better state and data management.
