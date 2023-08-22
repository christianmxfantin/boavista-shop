const express = require("express");
const router = express.Router();
const statesController = require("./states.controller");

router
  .get("/", statesController.getStates)
  .get("/:id", statesController.getStateById)
  .post("/", statesController.createState)
  .put("/:id", statesController.updateState)
  .delete("/:id", statesController.deleteState);

module.exports = router;
