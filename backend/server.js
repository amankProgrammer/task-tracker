require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});