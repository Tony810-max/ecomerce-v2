const { Order } = require("../models/order");
const { User } = require("../models/user");
const { Cart } = require("../models/cart");
const express = require("express");
const returnResponse = require("../helper/response");
const router = express.Router();

//get order with status
router.get("/:idUser/status", async (req, res) => {
  const status = req.query.status;
  const idUser = req.params.idUser;
  console.log(idUser);

  const order = await Order.find({
    user: idUser,
    status: status,
  }).populate("user");

  if (!order)
    return res.status(500).send("The cart for the given user was not found");

  returnResponse(res, 200, { order: order });
});

//get list of orders
router.get("/", async (req, res) => {
  try {
    const orderList = await Order.find({ deleteAt: null })
      .populate("user", "-password -isAdmin")
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
      "-password -isAdmin"
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

// get orders me
router.get("/me/:userId", async (req, res) => {
  const order = await Order.find({ user: req.params.userId, deleteAt: null })
    .populate("user")
    .populate({
      path: "cartItems",
      populate: {
        path: "items",
        populate: {
          path: "product",
          populate: "category",
        },
      },
    });

  if (!order)
    return res.status(500).send("The cart for the given user was not found");

  returnResponse(res, 200, { order: order });
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
router.delete("/:idOrder", async (req, res) => {
  const idOrder = req.params.idOrder;

  const findOrder = await Order.findOne({ _id: idOrder });

  if (!findOrder)
    return returnResponse(res, 404, { message: "The order cannot be found" });

  const updateOrder = await Order.findByIdAndUpdate(
    idOrder,
    {
      deleteAt: Date.now(),
      status: "Cancelled",
    },
    {
      new: true,
    }
  );

  if (!updateOrder)
    return returnResponse(res, 404, { message: "The order cannot be deleted" });

  returnResponse(res, 200, { message: "The order is deleted" });
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
      phone: req.body.phone,
      name: req.body.name,
      address: req.body.address,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
    });

    await order.save();
    await Cart.findByIdAndUpdate(
      { _id: idCart },
      {
        deleteAt: Date.now(),
      },
      {
        new: true,
      }
    );
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
