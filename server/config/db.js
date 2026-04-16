import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // 🔥 TEMPORARY HARDCODED URI – REMOVE AFTER TESTING
    const uri = "mongodb+srv://nswpl_db_user:NSWPL@nswpl.aixnzjb.mongodb.net/stationery_db?retryWrites=true&w=majority&appName=NSWPL";
    
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;