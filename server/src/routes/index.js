const express = require("express");

const usersRouter = require("../api/users/users.router");
const productsRouter = require("../api/products/products.router");
const authRouter = require("../api/auth/auth.router");
const rolesRouter = require("../api/roles/roles.router");

function routerAPI(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/users", usersRouter);
  router.use("/products", productsRouter);
  router.use("/auth", authRouter);
  router.use("/roles", rolesRouter);
}

module.exports = routerAPI;
