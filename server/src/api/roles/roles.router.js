const express = require("express");
const router = express.Router();
const usersController = require("./roles.controller");

router
  .get("/", usersController.getRoles)
  .get("/:id", usersController.getRoleById)
  .post("/", usersController.createRole)
  .put("/:id", usersController.updateRole)
  .delete("/:id", usersController.deleteRole);

module.exports = router;
