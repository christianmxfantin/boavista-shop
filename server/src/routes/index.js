const express = require("express");

const authRouter = require("../api/auth/auth.router");
const rolesRouter = require("../api/roles/roles.router");
const usersRouter = require("../api/users/users.router");
const addressesRouter = require("../api/addresses/addresses.router");
const paymentsTypesRouter = require("../api/paymentsTypes/paymentsTypes.router");
const paymentsRouter = require("../api/payments/payments.router");
const categoriesRouter = require("../api/categories/categories.router");
const discountsRouter = require("../api/discounts/discounts.router");
const productsRouter = require("../api/products/products.router");
const ordersRouter = require("../api/orders/orders.router");

const routerAPI = (app) => {
  const router = express.Router();
  app.use("/api", router);
  router.use("/auth", authRouter);
  router.use("/roles", rolesRouter);
  router.use("/users", usersRouter);
  router.use("/addresses", addressesRouter);
  router.use("/payments-types", paymentsTypesRouter);
  router.use("/payments", paymentsRouter);
  router.use("/categories", categoriesRouter);
  router.use("/discounts", discountsRouter);
  router.use("/products", productsRouter);
  router.use("/orders", ordersRouter);
};

module.exports = routerAPI;
