const { Cart } = require("../models/cart");
const { Product } = require("../models/product");

const express = require("express");
const router = express.Router();
const returnResponse = require("../helper/response");

// Thêm mục vào giỏ hàng
router.post("/:idProduct", async (req, res) => {
  const idProduct = req.params.idProduct;
  const userId = req.body.userId;

  let cart = await Cart.findOne({ user: userId, deleteAt: null });

  if (!cart) {
    cart = new Cart({
      user: userId,
      items: [{ product: idProduct, quantity: req.body.quantity }],
    });
  } else {
    const productIndex = cart.items.findIndex(
      (item) => item.product.toString() === idProduct
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += req.body.quantity;
    } else {
      cart.items.push({ product: idProduct, quantity: req.body.quantity });
    }
  }

  cart = await cart.save();
  return returnResponse(res, 200, { message: "Product Added To Cart" });
});

//add all to bag
router.post("/wishlist/:idUser", async (req, res) => {
  const idUser = req.params.idUser;
  let wishlistProducts = await Product.find({ wishlist: idUser });

  if (!wishlistProducts || wishlistProducts.length === 0) {
    return returnResponse(res, 404, {
      message: "No products found in wishlist",
    });
  }

  let cart = await Cart.findOne({ user: idUser });

  if (!cart) {
    cart = new Cart({
      user: idUser,
      items: wishlistProducts.map((product) => ({
        product: product._id,
        quantity: 1,
      })),
    });
  } else {
    wishlistProducts.forEach((product) => {
      const productIndex = cart.items.findIndex(
        (item) => item.product.toString() === product._id.toString()
      );

      if (productIndex > -1) {
        cart.items[productIndex].quantity += 1;
      } else {
        cart.items.push({ product: product._id, quantity: 1 });
      }
    });
  }

  cart = await cart.save();

  await Product.updateMany(
    { wishlist: idUser },
    { $pull: { wishlist: idUser } }
  );

  return returnResponse(res, 200, {
    message: "All wishlist products added to cart",
  });
});

router.get("/", async (req, res) => {
  const carts = await Cart.find()
    .populate("user", "-password")
    .populate({
      path: "items",
      populate: {
        path: "product",
        populate: "category",
      },
    });
  if (!carts) return returnResponse(res, 404, { message: "Cart not found" });
  returnResponse(res, 200, { carts: carts });
});

// Lấy giỏ hàng của người dùng
router.get("/me/:userId", async (req, res) => {
  const cart = await Cart.findOne({ user: req.params.userId, deleteAt: null })
    .populate("user", "id")
    .populate({
      path: "items",
      populate: {
        path: "product",
        populate: "category",
      },
    });

  if (!cart)
    return res.status(500).send("The cart for the given user was not found");

  res.send(cart);
});

// Xoá mục khỏi giỏ hàng
router.delete("/removeCart/:idCart", async (req, res) => {
  const idCart = req.params.idCart;

  const result = await Cart.updateOne(
    { "items._id": idCart },
    { $pull: { items: { _id: idCart } } }
  );

  if (result.modifiedCount === 0) {
    return res.status(404).send("No cart item found to delete");
  }

  res.status(200).send("Cart item deleted successfully");
});

//cap nhap quantity carts
router.patch("/updateQuantity/:idCart", async (req, res) => {
  const idCart = req.params.idCart;
  const newQuantity = req.body.quantity;

  let cart = await Cart.findOne({ "items._id": idCart });
  if (!cart) return res.status(404).send("No cart found");

  cart = await Cart.findOneAndUpdate(
    { "items._id": idCart },
    { $set: { "items.$.quantity": newQuantity } },
    { new: true }
  );

  res.status(200).send(cart);
});

module.exports = router;
