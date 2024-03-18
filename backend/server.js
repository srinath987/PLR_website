// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection string
const uri = 'mongodb+srv://srrinnatth97:HmwDD8FtEA1lWdlV@plr0.ckvgw7r.mongodb.net/?retryWrites=true&w=majority&appName=PLR0';
// mongodb+srv://srrinnatth97:HmwDD8FtEA1lWdlV@plr0.ckvgw7r.mongodb.net/

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Define routes
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
