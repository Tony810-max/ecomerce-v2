const mongoose = require("mongoose");

const userchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userchema.set("toJSON", {
  virtuals: true,
});

exports.User = mongoose.model("User", userchema);

exports.userchema = userchema;
