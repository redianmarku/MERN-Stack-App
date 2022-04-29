const mongoos = require("mongoose");

const userSchema = mongoos.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add your email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please put your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoos.model("User", userSchema);
