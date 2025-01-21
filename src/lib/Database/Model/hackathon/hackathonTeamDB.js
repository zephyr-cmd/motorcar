const mongoose = require("mongoose");

// Define the member schema
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
  },
  countryCode: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, "Please provide a valid 10-digit phone number"],
  },
  college: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  spoc: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Define the team schema
const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: [20, "Team name cannot exceed 20 characters"],
      match: [
        /^[a-zA-Z0-9._-]+$/,
        "Team name can only contain letters, numbers, hyphen (-), underscore (_), and dot (.), and no spaces are allowed",
      ],
    },
    members: {
      type: [memberSchema],
      validate: {
        validator: function (members) {
          // Check for a maximum of 4 members
          if (members.length > 4) {
            return false;
          }
          // Check for exactly one SPOC
          const spocCount = members.filter((member) => member.spoc).length;
          if (spocCount !== 1) {
            return false;
          }
          return true;
        },
        message: function (props) {
          // Custom error messages based on the validation failure
          const members = props.value;
          if (members.length > 4) {
            return "A team can have a maximum of 4 members.";
          }
          const spocCount = members.filter((member) => member.spoc).length;
          if (spocCount !== 1) {
            return "A team must have exactly one member set as the SPOC.";
          }
          return "Invalid members configuration.";
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.HackathonTeam ||
  mongoose.model("HackathonTeam", teamSchema);

// const Team = mongoose.model("Team", teamSchema);
// module.exports = Team;
