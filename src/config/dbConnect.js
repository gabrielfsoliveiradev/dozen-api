import mongoose from "mongoose";

async function connectOnDB() {
  mongoose.connect(process.env.DB_CONNECTION_STRING)
  
  return mongoose.connection
}

export default connectOnDB