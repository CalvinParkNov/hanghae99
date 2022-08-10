require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;
const route = require("./route");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

app.use("/api", route);

app.listen(PORT || 6000, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});

module.exports = app;
