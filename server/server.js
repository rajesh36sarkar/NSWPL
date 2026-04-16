import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './config/db.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;

connectDB();

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// ✅ GRACEFUL SHUTDOWN
const gracefulShutdown = async (signal) => {
  console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
  
  server.close(async () => {
    console.log('✅ HTTP server closed.');
    try {
      await mongoose.connection.close();
      console.log('✅ MongoDB connection closed.');
    } catch (err) {
      console.error('❌ Error closing MongoDB connection:', err);
    }
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error('❌ Could not close connections in time, forcefully shutting down.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

process.on('unhandledRejection', (err) => {
  console.log(`❌ Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});