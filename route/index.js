const express = require("express");
const router = express.Router();
const Post = require("./post");
const User = require("./user");
// const post = require("../controller/post");
// const post = [
//   {
//     id: 1,
//     title: "게시글 입니다.",
//     nickname: "닉네임입니다.",
//   },
// ];
router.use("/post", Post);
router.use("/user", User);

// router.get("/", post.getAllPost);
// router.get("/:id", post.getPost);
module.exports = router;
