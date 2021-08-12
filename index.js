const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 9000;
const path = require('path');

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, 'client/build')));

server.use("/api/*", (_, res) => {
  res.json({data: "The API is working"});
});

server.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


server.get('/', (req, res) => {
  res.status(200).json('Hello World!');
});

server.get('/api/users', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: 'John Doe',
      email: "john@email.com"
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: "jane@email.com"
    }
  ]);
});

server.post('/api/register', (req, res) => {
  const { username, password } = req.body; 
  if(!username || !password) {
    res.status(400).json({ message: 'Name and email are required' });
  } else {
    res.status(200).json({
    message: 'User created successfully!'
    });
  }
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if(!username || !password) {
    res.status(400).json({ message: 'Email and password are required' });
  } else {
    res.status(200).json({
      message: 'User logged in successfully!'
    });
  }
});