const express = require("express");
const router = express.Router();
const usersController = require("./users.controller");

router
  .get("/", usersController.getUsers)
  .get("/:id", usersController.getUserById)
  .get("/email/:email", usersController.getUserByEmail)
  .post("/", usersController.createUser)
  .put("/:id", usersController.updateUser)
  .put("/upload-avatar/:id", usersController.uploadAvatar)
  .delete("/:id", usersController.deleteUser);

module.exports = router;
