// server/routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post('/add', (req, res) => {
  const newPost = new Post(req.body);
  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;

