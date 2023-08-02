const express = require("express");

const authRouter = require("../api/auth/auth.router");
const rolesRouter = require("../api/roles/roles.router");
const usersRouter = require("../api/users/users.router");
const addressesRouter = require("../api/addresses/addresses.router");
const productsRouter = require("../api/products/products.router");

const routerAPI = (app) => {
  const router = express.Router();
  app.use("/api", router);
  router.use("/auth", authRouter);
  router.use("/roles", rolesRouter);
  router.use("/users", usersRouter);
  router.use("/addresses", addressesRouter);
  router.use("/products", productsRouter);
};

module.exports = routerAPI;
