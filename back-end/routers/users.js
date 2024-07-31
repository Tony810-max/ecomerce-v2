const { User } = require("../models/user");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//get user list
router.get("/", async (req, res) => {
  try {
    const userList = await User.find().select("-passwordHash");

    if (!userList) return res.status(404).json({ message: "No data" });

    res.status(201).json(userList);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
});

//get user by id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");

  if (!user)
    return res.status(404).json({ message: "The user does not exist" });
  res.status(200).send(user);
});

//create a new user
router.post("/register", async (req, res) => {
  const { phone, email } = req.body;

  // Check if the phone number already exists
  const phoneExists = await User.findOne({ phone });
  if (phoneExists) {
    return res.status(400).json({ message: "Phone number already exists" });
  }

  // Check if the email already exists
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ message: "Email already exists" });
  }

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phone: req.body.phone,
    isAdmin: req.body.isAdmin,
  });

  user = await user.save();
  if (!user) return res.status(400).send("The user cannot be created");

  res.status(200).send("The user has been created");
});

//login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;

  if (!user) return res.status(400).send("User not found");

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      {
        expiresIn: "1d",
      }
    );

    const userWithoutPasswordHash = {
      ...user.toObject(),
      passwordHash: null,
    };

    console.log(user);

    return res.status(200).send({ user: userWithoutPasswordHash, token });
  } else {
    res.status(400).send("Password is wrong");
  }
});

//get user count
router.get("/get/count", async (req, res) => {
  const userCount = await User.countDocuments();

  if (!userCount) return res.status(500).json({ sucesss: false });

  res.status(201).send({
    userCount: userCount,
  });
});

//delete user
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "the user is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "user not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;
