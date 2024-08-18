
# Topmate MERN Stack Project Documentation


## Project Overview:
Topmate is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform enables users to [describe the main functionality of Topmate, e.g., connect with experts, book appointments, share knowledge, etc.]. This documentation outlines the project setup, architecture, development process, and deployment strategy.

## 1.Project setup
## 1.1 Prerequisites
Ensure you have the following tools and software installed on your machine:




## Features

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)
- npm or yarn (for package management)
- Git (for version control)

## 1.2 Installation
Follow these steps to set up the project locally:
Cone 

1 Clone the repository

```bash
  https://github.com/Faisla123/Topmate.git
```
2 Install dependencies for both the backend and frontend:    

```bash
 # Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

```
## 1.3 Environment Configuration
Create a .env file in the root of the server directory and add the following environment variables:
```bash
# Server Configuration
PORT=5000
MONGO_URI=mongodb://localhost:27017/topmate
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE_API_KEY=your_email_service_api_key
CLOUD_STORAGE_BUCKET=your_cloud_storage_bucket

# Client Configuration
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

```
## Frontend
## 2.1 Folder Structure
The client directory is organised as follows
```bash
client/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Profile.js
│   │   └── ...
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store.js
│   ├── services/
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...

```
## 2.2 React components
- Components: Reusable components (e.g., Navbar, Footer) are stored in the components/ directory.
- Pages: The pages/ directory contains components that correspond to each route (e.g., Home.js, Profile.js).
## 2.3 State Management
State is managed using Redux. The redux/ directory includes:
- Actions: Define the actions that trigger state changes.
- Reducers: Handle the updates to the state based on the dispatched actions.
- Store: The central location where the application's state is managed.
## 2.4 API Integration
API requests are handled via the services/ directory using axios. Here is an example service:
```bash
import axios from 'axios';

export const fetchUserProfile = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/user/profile`);
};

```
## 2.5 Styling
Styling is managed using Tailwind CSS files or styled-components in the styles/ directory. The project uses a mobile-first design approach with responsive layouts.

## 3 Backend
## 3.1 Folder Structure
The server directory is structured as follows:
```bash
server/
│
├── config/
│   ├── db.js
│   └── ...
├── controllers/
│   ├── userController.js
│   └── ...
├── models/
│   ├── User.js
│   ├── Booking.js
│   └── ...
├── routes/
│   ├── userRoutes.js
│   ├── bookingRoutes.js
│   └── ...
├── middleware/
│   ├── authMiddleware.js
│   └── ...
├── utils/
│   ├── emailService.js
│   └── ...
├── server.js
└── ...

```
## 3.2 API End-Points
The backend exposes a RESTful API with the following endpoints:
#### User Routes
- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user
- `GET /api/users/:id`: Get user by ID
- `PUT /api/users/:id`: Update user by ID
- `DELETE /api/users/:id`: Delete user by ID
#### Booking Routes
- `POST /api/bookings`: Create a new booking
- `GET /api/bookings/user/:id`: Get all bookings for a user
- `DELETE /api/bookings/:id`: Delete a booking
## 3.3 Middleware 
Middleware is used to handle tasks like authentication and error handling. Example of an authentication middleware:
```bash
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;

```
## 3.4 Database Schema
The project uses Mongoose to define models. Example User schema:
```bash
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);

```
## 3.5 Authentication
The application uses JWT (JSON Web Token) for authentication. Upon successful login, the server generates a token, which is used to authenticate subsequent requests.

## 4 Database
## 4.1 MongoDB setup
Ensure MongoDB is running either locally or using a cloud-based solution like MongoDB Atlas. The connection string is defined in the .env file under MONGO_URI.
## 4.2 Collections
Collections in MongoDB are created automatically based on Mongoose models. Key collections include:

- Users: Stores user profiles and credentials.
- Bookings: Stores user bookings and appointments.
## 4.3 Indexes
Indexes are defined in the schema to optimize query performance. Example:
```bash
userSchema.index({ email: 1 });

```
## Design


## Screenshots
![home](https://github.com/user-attachments/assets/180d2de0-f60b-4204-aaf8-c54571a363ff)



![sign-in](https://github.com/user-attachments/assets/00ccfb72-3826-4b6a-b112-bd267f1dae02)


