const express = require("express");

const usersRouter = require("./users.router");

function routerAPI(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/users", usersRouter);
}

module.exports = routerAPI;
