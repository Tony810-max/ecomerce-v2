const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");
const { User } = require("../models/user");
const { Cart } = require("../models/cart");
const express = require("express");
const mongoose = require("mongoose");
const returnResponse = require("../helper/response");
const router = express.Router();

//get list of orders
router.get("/", async (req, res) => {
  try {
    const orderList = await Order.find()
      .populate("user", "-passwordHash -isAdmin")
      .populate("cartItems")
      .sort({ dateOrdered: -1 });

    if (!orderList) return returnResponse(res, 404, { message: "no data" });

    res.status(200).json(orderList);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
});

//get orders id
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "-passwordHash -isAdmin"
    );

    if (!order) return res.status(404).json({ message: "no data" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
});

//get orders me
router.get("/me/:idUser", async (req, res) => {
  try {
    const idUser = req.params.idUser;

    if (!mongoose.Types.ObjectId.isValid(idUser)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Tìm tất cả các đơn hàng của người dùng
    const orders = await Order.find({ user: idUser });

    console.log(orders);

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No data" });
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      error: error.message, // Trả về thông báo lỗi dễ đọc hơn
      success: false,
    });
  }
});

//update order status
router.patch("/:idOrder", async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.idOrder,
    {
      status: req.body.status,
    },
    {
      new: true,
    }
  );
  if (!order) return res.status(404).send("The order cannot be found");
  res.status(200).send(order);
});

//delete a order
router.delete("/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(async (order) => {
      if (order) {
        order.orderItems.map(async (orderItem) => {
          await OrderItem.findByIdAndDelete(orderItem);
        });
        return res
          .status(200)
          .json({ success: true, message: "the order is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "order not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

router.post("/:idCart", async (req, res) => {
  try {
    const idCart = req.params.idCart;
    const user = req.body.user;
    const findUser = await User.findById(user);

    if (!findUser)
      return returnResponse(res, 404, { message: "User not found" });

    const cart = await Cart.findById(idCart);
    if (!cart) return returnResponse(res, 404, { message: "cart not found" });

    const order = new Order({
      cartItems: idCart,
      shippingAddress: req.body.shippingAddress,
      phone: req.body.phone,
      address: req.body.address,
      status: req.body.status,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
    });

    await order.save();
    // await Cart.findOneAndDelete({ _id: idCart });
    returnResponse(res, 200, { message: "Order created successfully" });
  } catch (error) {
    returnResponse(res, 500, {
      error: error,
      success: false,
    });
  }
});

// //get total sales
// router.get("/get/totalSales", async (req, res) => {
//   const totalSales = await Order.aggregate([
//     { $group: { _id: null, totalsales: { $sum: "$totalPrice" } } },
//   ]);

//   if (!totalSales) {
//     return res.status(400).send("The order sales cannot be generated");
//   }

//   res.status(200).send({ totalsales: totalSales.pop().totalsales });
// });

//get count orders
router.get("/get/count", async (req, res) => {
  const orderCount = await Order.countDocuments();

  if (!orderCount) return returnResponse(res, 500, { sucesss: false });
  returnResponse(res, 201, {
    orderCount: orderCount,
  });
});

//get count order processing
router.get("/get/Count-Processing", async (req, res) => {
  try {
    const orderCount = await Order.countDocuments({ status: "pending" });

    if (orderCount === 0) {
      return returnResponse(res, 500, {
        success: false,
        message: "No pending orders found",
      });
    }
    returnResponse(res, 200, {
      orderCount: orderCount,
    });
  } catch (err) {
    returnResponse(res, 500, { success: false, error: err.message });
  }
});

module.exports = router;
