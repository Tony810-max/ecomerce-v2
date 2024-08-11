const { User } = require("../models/user");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const returnResponse = require("../helper/response");

//get user list
router.get("/", async (req, res) => {
  try {
    const userList = await User.find().select("-password");

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
  const user = await User.findById(req.params.id).select("-password");

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
    password: bcrypt.hashSync(req.body.password, 10),
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

  if (!user) return returnResponse(res, 400, { message: "User not found" });
  console.log(user.password);
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
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
      password: null,
    };

    console.log(user);

    return returnResponse(res, 200, { user: userWithoutPasswordHash, token });
  } else {
    returnResponse(res, 400, { message: "email or password is wrong" });
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

router.patch("/updateProfile/:idUser", async (req, res) => {
  const idUSer = req.params.idUser;
  const phoneUSer = req.body.phone;

  const findUser = await User.findById(idUSer);
  if (!findUser) return returnResponse(res, 404, { message: "user not found" });

  const findPhoneUser = await User.findOne({ phone: phoneUSer });

  if (findPhoneUser)
    return returnResponse(res, 404, { message: "Phone user is already" });

  const updatedUser = await User.findByIdAndUpdate(
    idUSer,
    { $set: req.body },
    { new: true }
  );

  await updatedUser.save();

  if (!updatedUser)
    return returnResponse(res, 500, { message: "Update failed" });

  return returnResponse(res, 200, {
    message: "User updated successfully",
    user: updatedUser,
  });
});

router.patch("/change-password/:idUser", async (req, res) => {
  try {
    const idUser = req.params.idUser;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return returnResponse(res, 400, { message: "Missing passwords" });
    }

    const findUser = await User.findById(idUser);

    if (!findUser) {
      return returnResponse(res, 404, { message: "User not found" });
    }

    const validPassword = await bcrypt.compare(oldPassword, findUser.password);

    if (!validPassword) {
      return returnResponse(res, 404, { message: "Password incorrect" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    let updateUser = await User.findOneAndUpdate(
      { _id: idUser },
      {
        password: hashedNewPassword,
      },
      {
        new: true,
      }
    );

    if (!updateUser) {
      return returnResponse(res, 500, { message: "Update failed" });
    }

    return returnResponse(res, 200, {
      message: "Password changed successfully",
      user: updateUser,
    });
  } catch (error) {
    console.error(error);
    return returnResponse(res, 500, { message: "Internal server error" });
  }
});

module.exports = router;
