const express = require("express");
const router = express.Router();
const usersController = require("./users.controller");

router
  .get("/", usersController.getUsers)
  .get("/:id", usersController.getOneById)
  .post("/", usersController.createUser)
  .put("/:id", usersController.updateUser)
  .delete("/:id", usersController.deleteUser);

module.exports = router;
