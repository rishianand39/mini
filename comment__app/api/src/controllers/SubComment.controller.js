const router = require("express").Router();
const SubComment = require("../models/SubComment.model");

// GET SUBCOMMENTS
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(404).json("enter  id for message");
  }
  try {
    const subcomments = await SubComment.find({ messageId: id });
    return res.status(200).json(subcomments);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

// POST SUBCOMMENT
router.post("/create", async (req, res) => {
  try {
    const comment = await SubComment.create(req.body);
    return res.status(200).json("subcomment created successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = router;
