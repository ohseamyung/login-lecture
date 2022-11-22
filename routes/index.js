const express = require("express");
const router = express.Router();
const port = 7000;
router.get("/api", (req, res) => {
  console.log("app.get");
  // res.send("여기는 루트입니다");
  // console.log("여기는루트입니다");
});
router.get("/api/login", (req, res) => {
  res.send("여기는 login입니다");
});

module.exports = router;
