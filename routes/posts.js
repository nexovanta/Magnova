const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
  const { username, content, image } = req.body;
  const newPost = new Post({ username, content, image });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get All Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
