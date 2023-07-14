const express = require("express");

const usersRouter = require("../api/users/users.router");

function routerAPI(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/users", usersRouter);
}

module.exports = routerAPI;
