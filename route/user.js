const express = require("express");
const router = express.Router();
const User = require("../controller/user");

router.route("/").get(User.getAllUser).post(User.createAccount);

module.exports = router;
