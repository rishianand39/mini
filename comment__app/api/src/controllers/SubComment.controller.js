const router = require("express").Router();
const SubComment = require("../models/SubComment.model");

// GET COMMENT
router.get("/getsubcomment", async (req, res) => {
    const id=req.params.id
    try {
    const subcomments = await SubComment.find({messageId:id});
    return res.status(200).json(subcomments);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
