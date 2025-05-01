import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI; // MongoDB connection URI from environment variables
// Check if the MONGODB_URI environment variable is defined
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
let cached = global.mongoose; // Check if the cached connection exists in the global object
// If not, create a new cached connection object
if(!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
async function dbconnect() {
  if (cached.conn) {
    return cached.conn;// Return cached connection if it exists
  }
  if(!cached.promise){
    const obj={
      bufferCommands: false, //disable buffer commands
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds server selection
    }
    //create a new connection and return promise and stroe it in cache
    cached.promise = mongoose.connect(MONGODB_URI, obj).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise; // Wait for the connection to be established
  }
  catch (e) {
    cached.promise = null; //if error occurs, reset the promise
    throw e;
  }
  return cached.conn; // Return the connection
}
export default dbconnect; // Export the dbconnect function for use in other files