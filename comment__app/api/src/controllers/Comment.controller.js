const router = require("express").Router();
const Comment = require("../models/Comment.model");

// GET COMMENTS
router.get("/", async (req, res) => {

  try {
    const comments = await Comment.find().sort({createdAt:-1}).limit(10);
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// POST COMMENT
router.post("/create", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(200).json("comment created successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports=router