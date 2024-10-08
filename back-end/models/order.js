const mongoose = require("mongoose");

const oderSchema = mongoose.Schema(
  {
    cartItems: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deleteAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

oderSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

oderSchema.set("toJSON", {
  virtuals: true,
});

exports.Order = mongoose.model("Order", oderSchema);
