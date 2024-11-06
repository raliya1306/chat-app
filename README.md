# Chat App

This Chat App has been implemented using Express.js and Node.js to build RESTFUL API endpoints to manage messages and user data which has been stored in a MongoDB database. The frontend user interface has been built using React.js and integrated seamlessly with the backend. This application offers a user-friendly interface that facilitates efficient exchange of messages between users in real-time.

## Features
- User authentication using JWT
- Add new users to initiate a conversation
- Real-time messaging using Socket.io
- Express yourself with a wide range of emojis
- Block users to protect privacy 
- Responsive design for desktop and mobile devices

## Technologies used
The following technologies have been used to develop this chat app:
- Node.js: JavaScript runtime environment for server-side development
- React.js: A library used to build user-interface
- Express.js: Web application framework in Node.js for handling requests and routing
- MongoDB: The database used to store application data

## Installation
- Clone this repository to your local machine
```sh
git clone https://github.com/raliya1306/chat-app.git
```

- Navigate to the project directory
```sh
cd chat-app
```

- Install client-side dependencies
```sh
cd frontend
npm install
```

- Install server-side dependencies
```sh
cd backend
npm install
```

- Create a new MongoDB database for the application and update the .env file with the database credentials

- Run the backend
```sh
cd backend
npm run dev
```

- Open another terminal and run the frontend
```sh
cd frontend
npm run dev
```

The application should be running at
```sh
https://localhost:5173
```