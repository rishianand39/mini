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
  let query = [];
  for (let key in req.query) {
    if (key !== "limit" && key !== "page") {
      let tem = {
        [key]: req.query[key],
      };
      query.push(tem);
    }
  }
  try {
    let users;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;
    if (query.length !== 0) {
      users = await User.find({
        $and: query,
      })
        .limit(limit)
        .skip(skip)
        .lean()
        .exec();
      
    } else {
      users = await User.find().limit(limit).skip(skip).lean().exec();
    }

    // TOTAL PAGE
    let total = Math.ceil((await User.find().countDocuments())/limit);

    return res.status(200).json({total,users});
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
