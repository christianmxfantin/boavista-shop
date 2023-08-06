const express = require("express");
const router = express.Router();
const apiController = require("./api.controller");

router.all("*", apiController.allRoutes);

module.exports = router;
