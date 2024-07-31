const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

exports.Category = mongoose.model("Category", categorySchema);
