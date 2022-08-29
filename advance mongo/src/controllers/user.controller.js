const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const { verifyToken } = require("../middlewares/verifyToken");

// get single user
router.get("/single", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ uid: req.uid });

    if (!user) {
      return res.status(501).json("user not found");
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(501).json(error);
  }
});

// get all users
router.get("/all", async (req, res) => {
  const { first_name, email, mobile, status, role } = req.query;
  try {
    const user = await User.find({
      $or: [
        { first_name: first_name },
        { email: email },
        { mobile: mobile },
        { status: status },
        { role: role },
      ],
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;