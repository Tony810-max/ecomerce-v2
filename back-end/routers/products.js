const { Product } = require("../models/product");
const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const returnResponse = require("../helper/response");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadErr = new Error("Invalid image type");

    if (isValid) {
      uploadErr = null;
    }
    cb(uploadErr, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];

    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.get("/", async (req, res) => {
  const products = await Product.find().populate("category");
  if (!products) return res.status(404).json({ message: "no data" });

  res.status(201).json(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = await Product.findById(req.params.id).populate(
      "category"
    );
    if (!productId)
      return res.status(404).json({ message: "The product not found" });

    res.status(201).json(productId);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
});

// Tạo sản phẩm mới
router.post("/", uploadOptions.single("image"), async (req, res) => {
  const category = await Category.findById(req.body.category);

  const isSale = req.body.isSale;

  if (!category) return res.status(400).send("Invalid category");

  const file = req.file;

  if (!file) return res.status(400).send("No Image in the request");

  const fileName = req.file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads`;
  let discount = 0;
  let salePercent = 0;
  let priceOrigin = Number(req.body.priceOrigin);

  if (isSale === true) {
    salePercent = Number(req.body.salePercent);
    discount = priceOrigin * ((100 - salePercent) / 100);
  } else {
    priceOrigin = Number(req.body.priceOrigin);
    discount = 0;
    salePercent = 0;
  }

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    image: `${basePath}/${fileName}`,
    priceOrigin: priceOrigin,
    discount: discount,
    salePercent: salePercent,
    category: req.body.category,
    countInStock: req.body.countInStock,
  });

  product = await product.save();

  if (!product) return res.status(500).send("The product cannot be created");

  res.status(201).send(product);
});

// Cập nhật sản phẩm
router.put("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send("Invalid product id");

  const category = await Category.findById(req.body.category);

  if (!category) return res.status(400).send("Invalid category");

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      numReview: req.body.numReview,
    },
    {
      new: true,
    }
  );
  if (!product) return res.status(500).send("The product cannot be updated");
  res.status(200).send(product);
});

// Xóa sản phẩm và ảnh
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      const imagePath = product.image.replace(
        `${req.protocol}://${req.get("host")}/`,
        ""
      );

      // Xóa ảnh
      fs.unlink(path.join(__dirname, "../", imagePath), async (err) => {
        if (err) {
          return res.status(500).json({ success: false, error: err });
        }

        // Xóa sản phẩm sau khi ảnh đã xóa thành công
        await Product.findByIdAndDelete(req.params.id);
        return res
          .status(200)
          .json({ success: true, message: "The product is deleted" });
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
});

// Đếm số lượng sản phẩm
router.get("/get/count", async (req, res) => {
  const productCount = await Product.countDocuments();

  if (!productCount) return res.status(500).json({ sucesss: false });

  res.status(201).send({
    productCount: productCount,
  });
});

// Sản phẩm nổi bật
router.get("/get/featured/:count", async (req, res) => {
  const count = req.params.count ? req.params.count : 0;

  const productFeatures = await Product.find({ isFeatured: true }).limit(
    +count
  );

  if (!productFeatures) return res.status(500).json({ sucesss: false });

  res.status(201).send(productFeatures);
});

router.put(
  "/gallery/:id",
  uploadOptions.array("images", 4),
  async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id))
      return res.status(400).send("Invalid product id");

    const files = req.files;
    let imagePath = [];
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

    if (files) {
      files.map((files) => imagePath.push(`${basePath}${files.filename}`));
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        images: imagePath,
      },
      {
        new: true,
      }
    );
    if (!product) return res.status(500).send("The product cannot be updated");
    returnResponse(res, 200, { message: "Product updated successfully" });
  }
);

//create wishlish
router.patch("/wishlist/:idProduct", async (req, res) => {
  const idProduct = req.params.idProduct;
  const product = await Product.findById(idProduct);
  const userId = req.body.userId;
  const checkProductWishlist = product?.wishlist?.includes(userId);

  if (!product)
    return returnResponse(res, 404, { message: "Product not found" });

  if (checkProductWishlist) {
    return returnResponse(res, 400, { message: "Product already in wishlist" });
  }

  const productNew = await Product.findByIdAndUpdate(
    { _id: idProduct },
    {
      $push: { wishlist: userId },
    },
    {
      new: true,
    }
  );
  returnResponse(res, 200, {
    message: "Product added to wishlist",
    productNew: productNew,
  });
});

//delete wishlist
router.delete("/wishlist/:idProduct", async (req, res) => {
  const idProduct = req.params.idProduct;
  const userId = req.body.userId;

  const result = await Product.updateOne(
    { _id: idProduct },
    {
      $pull: { wishlist: userId },
    }
  );

  if (result.modifiedCount === 0) {
    return returnResponse(res, 404, {
      message: "No wishlist item found to delete",
    });
  }
  returnResponse(res, 200, { message: "Cart item deleted successfully" });
});

module.exports = router;
