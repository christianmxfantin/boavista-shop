const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router
  .post("/singup", authController.singUp)
  .post("/singin", authController.singIn)
  .post("/google", authController.googleAuth);

module.exports = router;
