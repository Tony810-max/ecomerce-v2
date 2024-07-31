const { Order } = require("../models/order");
const { OrderItem } = require("../models/order-item");

const express = require("express");
const router = express.Router();

//get list of orders
router.get("/", async (req, res) => {
  try {
    const orderList = await Order.find()
      .populate("user", "-passwordHash -isAdmin")
      .sort({ dateOrdered: -1 });

    if (!orderList) return res.status(404).json({ message: "no data" });

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
    const order = await Order.findById(req.params.id)
      .populate("user", "-passwordHash -isAdmin")
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
          populate: "category",
        },
      });

    if (!order) return res.status(404).json({ message: "no data" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
});

//update order status
router.put("/:id", async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
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

router.post("/", async (req, res) => {
  try {
    const orderItems = req.body.orderItems;
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).send("No order items provided");
    }

    const orderItemsIds = await Promise.all(
      orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
          quantity: orderItem.quantity,
          product: orderItem.product,
        });

        newOrderItem = await newOrderItem.save();
        return newOrderItem._id;
      })
    );

    const totalPrices = await Promise.all(
      orderItemsIds.map(async (orderItemId) => {
        const orderItem = await OrderItem.findById(orderItemId).populate(
          "product",
          "price"
        );
        const totalPrice = orderItem.product.price * orderItem.quantity;
        return totalPrice;
      })
    );

    const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

    console.log(totalPrice);

    let order = new Order({
      orderItems: orderItemsIds,
      shippingAddress1: req.body.shippingAddress1,
      shippingAddress2: req.body.shippingAddress2,
      phone: req.body.phone,
      zip: req.body.zip,
      city: req.body.city,
      country: req.body.country,
      totalPrice: totalPrice,
      user: req.body.user,
      status: req.body.status,
    });

    order = await order.save();

    if (!order) return res.status(400).send("The order cannot be created");

    res.status(201).send(order);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
});

//get total sales
router.get("/get/totalSales", async (req, res) => {
  const totalSales = await Order.aggregate([
    { $group: { _id: null, totalsales: { $sum: "$totalPrice" } } },
  ]);

  if (!totalSales) {
    return res.status(400).send("The order sales cannot be generated");
  }

  res.status(200).send({ totalsales: totalSales.pop().totalsales });
});

router.get("/get/count", async (req, res) => {
  const orderCount = await Order.countDocuments();

  if (!orderCount) return res.status(500).json({ sucesss: false });

  res.status(201).send({
    orderCount: orderCount,
  });
});

//get count order processing
router.get("/get/Count-Processing", async (req, res) => {
  try {
    const orderCount = await Order.countDocuments({ status: "pending" });

    if (orderCount === 0) {
      return res
        .status(500)
        .json({ success: false, message: "No pending orders found" });
    }

    res.status(200).send({
      orderCount: orderCount,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
