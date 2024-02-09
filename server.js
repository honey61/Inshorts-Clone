const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routers/user');
const cors = require('cors');


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect('Copy your mongos key here', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB server');
})
.catch((err) => {
  console.error('Error connecting to MongoDB server:', err.message);
});

// Use userRoutes for handling user-related requests
app.use('/user', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
