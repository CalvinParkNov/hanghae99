const express = require("express");
const router = express.Router();
const Post = require("../controller/post");

router.route("/").get(Post.getAllPost);

module.exports = router;
