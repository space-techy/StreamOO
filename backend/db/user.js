import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],  // 'required' field with custom error message
  },
  email: {
    type: String,
    required: [true, 'Email is required'],  // 'required' field with custom error message
    unique: true,  // Ensure email is unique
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],  // Email format validation
  },
  password: {
    type: String,
    required: true,  // Required password
    // minlength: [6, 'Password must be at least 6 characters long'],  // Minimum length validation
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Default value for the field
  },
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
