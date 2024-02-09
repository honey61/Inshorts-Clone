


const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { redirect } = require('react-router-dom');

router.use(bodyParser.json());
router.use(cors());


// User registration
router.post('/register', async (req, res) => {
  try {
        console.log(req.body);
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ error: 'Registration failed. Please try again.' });
      }
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful'});
      
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// router.get('/checkLogin', (req, res) => {
//   if (req.isLoggedIn && req.username) {
//     res.status(200).json({ isLoggedIn: true, username: req.username });
//   } else {
//     res.status(200).json({ isLoggedIn: false, username: '' });
//   }
// });

// // Logout user
// router.post('/logout', (req, res) => {
//   req.destroy((err) => {
//     if (err) {
//       console.error('Error during logout:', err);
//       res.status(500).json({ error: 'Logout failed.' });
//     } else {
//       res.status(200).json({ message: 'Logout successful' });
//     }
//   });
// });

module.exports = router;
