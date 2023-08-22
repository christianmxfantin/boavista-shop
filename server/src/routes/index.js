const express = require("express");

const authRouter = require("../api/auth/auth.router");
const rolesRouter = require("../api/roles/roles.router");
const usersRouter = require("../api/users/users.router");
const addressesTypesRouter = require("../api/addressesTypes/addressesTypes.router");
const citiesRouter = require("../api/cities/cities.router");
const statesRouter = require("../api/states/states.router");
const countriesRouter = require("../api/countries/countries.router");
const addressesRouter = require("../api/addresses/addresses.router");
const cardCompaniesRouter = require("../api/cardCompanies/cardCompanies.router");
const paymentsTypesRouter = require("../api/paymentsTypes/paymentsTypes.router");
const paymentsRouter = require("../api/payments/payments.router");
const categoriesRouter = require("../api/categories/categories.router");
const discountsRouter = require("../api/discounts/discounts.router");
const productsRouter = require("../api/products/products.router");
const ordersRouter = require("../api/orders/orders.router");
const apiRouter = require("../api/api/api.router");

const routerAPI = (app) => {
  const router = express.Router();
  app.use("/api", router);
  router.use("/auth", authRouter);
  router.use("/roles", rolesRouter);
  router.use("/users", usersRouter);
  router.use("/addresses-types", addressesTypesRouter);
  router.use("/cities", citiesRouter);
  router.use("/states", statesRouter);
  router.use("/countries", countriesRouter);
  router.use("/addresses", addressesRouter);
  router.use("/card-companies", cardCompaniesRouter);
  router.use("/payments-types", paymentsTypesRouter);
  router.use("/payments", paymentsRouter);
  router.use("/categories", categoriesRouter);
  router.use("/discounts", discountsRouter);
  router.use("/products", productsRouter);
  router.use("/orders", ordersRouter);
  app.all("*", apiRouter);
};

module.exports = routerAPI;
