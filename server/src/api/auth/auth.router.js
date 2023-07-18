const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router
  .post("/register", authController.register)
  .post("/login", authController.login)
  .post("/google", authController.googleAuth)
  .get("/token", authController.token);

module.exports = router;
