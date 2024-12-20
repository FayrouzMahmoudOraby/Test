const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const User = require('./user'); 

mongoose.connect('mongodb+srv://Admin:ice_cream@flavours.kyncaof.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const newUser = new User({ name, email, password });
      await newUser.save();
      const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ message: 'User created successfully', token, user: newUser.toJSON() });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    }
});

app.get('/signup', async (req, res) => {
    try {
        const users = await User.find();       
        res.json(users);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving signup data' });
      }
});  
  
app.post('/feedback', async (req, res) => {
    try {
      const {content} = req.body;
      const useremail = req.user._email;   
      const feedback = new Feedback({ user: useremail, content});
      await feedback.save();  
      res.json({ message: 'Feedback submitted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error submitting feedback' });
    }
});

app.get('/feedback', async (req, res) => {
    try {
      const feedback = await Feedback.find().sort({ 'useremail': 1 });
      res.json(feedback);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving feedback' });
    }
});   