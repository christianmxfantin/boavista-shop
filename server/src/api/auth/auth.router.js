const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router
  .get("/token", authController.token)
  .post("/register", authController.register)
  .post("/login", authController.login)
  .post("/google/", authController.googleAuth)
  .post("/reset-database/", authController.resetDatabase)
  .put("/change-password/:id", authController.changePassword);

module.exports = router;
