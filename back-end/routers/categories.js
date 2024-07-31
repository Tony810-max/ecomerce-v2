const { returnResponse } = require("../helper/response");
const { Category } = require("../models/category");
const express = require("express");

const router = express.Router();

//get category list
router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();

    if (!categoryList) {
      return returnResponse(res, 404, { message: "No data" });
    }

    return returnResponse(res, 200, categoryList);
  } catch (error) {
    return returnResponse(res, 500, {
      error: error,
      success: false,
    });
  }
});

//get category details
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return returnResponse(res, 404, { message: "The category does not exist" });
  }

  return returnResponse(res, 200, category);
});

//post category
router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  category = await category.save();

  if (!category) {
    return res.status(404).send("the category cannot be created");
  }

  res.status(201).send(category);
});

//update a category
router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
      updateAt: Date.now(),
    },
    {
      new: true,
    }
  );

  
  if (!category) return res.status(404).send("The category cannot be found");

  res.status(200).send(category);
});

//delete a category
router.delete("/:id", (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(200)
          .json({ success: true, message: "the category is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;
