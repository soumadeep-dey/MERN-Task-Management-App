const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

(async () => {
  try {
    const conn = await mongoose.connect(`${DB_URL}/Todo`);
    console.log(`✅ MongoDB connected! DB host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`❌ MongoDB connection error: ${error}`);
  }
})();
