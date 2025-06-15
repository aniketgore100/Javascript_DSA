const { config } = require('dotenv');
const mongoose = require('mongoose');
config();
// Load environment variables from .env file
const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/dsa'; // Default to local MongoDB if not set
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;