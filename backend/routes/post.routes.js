const express = require('express');
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost} = require('../controllers/post.controller');
const router = express.Router();

// GET
router.get("/", getPosts);
// POST
router.post("/", setPosts);
// PUT
router.put("/:id", editPost);
// DELETE
router.delete("/:id", deletePost);
// PATCH = LIKE
router.patch("/like-post/:id", likePost);
// PATCH = DISLIKE
router.patch("/dislike-post/:id", dislikePost);


module.exports = router