const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  permissionLevel: Number,
  createdAt: { type: Date, default: new Date().toLocaleDateString() },
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
// Ensure virtual fields are serialised.
userSchema.set("toJSON", {
  virtuals: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
