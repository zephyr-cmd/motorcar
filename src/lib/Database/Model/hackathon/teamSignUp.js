const mongoose = require("mongoose");

// Define the team schema
const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    contactNumber: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          // Allow empty string (optional field) or validate phone number
          return !v || /^\+?[\d\s-]{10,}$/.test(v);
        },
        message: "Please enter a valid phone number",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.HackathonTeamSignUp ||
  mongoose.model("HackathonTeamSignUp", teamSchema);

// const Team = mongoose.model("Team", teamSchema);
// module.exports = Team;
