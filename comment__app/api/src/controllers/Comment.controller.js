const router = require("express").Router();
const Comment = require("../models/Comment.model");

// GET COMMENT
router.get("/getcomment", async (req, res) => {
  try {
    const comments = await Comment.find();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
