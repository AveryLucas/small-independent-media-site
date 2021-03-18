const router = require("express").Router();
const Post = require("../models/postModel");

router.post("/", async (req, res) => {
  // Get data from request
  const { title, subTitle, description, content } = req.body;
  // Create new post model
  const newPost = new Post({ title, subTitle, description, content });
  // Attempt to save post to database
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
