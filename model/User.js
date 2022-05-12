import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  permissionLevel: Number,
  createdAt: { type: Date, default: new Date().toLocaleDateString() },
});

export default userSchema;
