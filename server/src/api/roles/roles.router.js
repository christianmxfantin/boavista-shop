const express = require("express");
const router = express.Router();
const rolesController = require("./roles.controller");

router
  .get("/", rolesController.getRoles)
  .get("/:id", rolesController.getRoleById)
  .post("/", rolesController.createRole)
  .put("/:id", rolesController.updateRole)
  .delete("/:id", rolesController.deleteRole);

module.exports = router;
