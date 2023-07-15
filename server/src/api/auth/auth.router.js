const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router
  .post("/singin", authController.singIn)
  .post("/singout", authController.singOut)
  .post("/google", authController.googleAuth);

module.exports = router;
