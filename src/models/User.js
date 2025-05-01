//create a user model using mongoose
// This model will be used to store user information in the database
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    required: true,
  }
},{timestamps:true}); //show timestamps in the document
module.exports = mongoose.models.User || mongoose.model("User", userSchema); // Export the User model, creating it if it doesn't exist