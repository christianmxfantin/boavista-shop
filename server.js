const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mysql = require("mysql");
const port = process.env.PORT || 4000;

//Middlewares

//Database Sessions

//Index
// app.get("/", (req, res) => {
//   res.status(200).render("index.html");
// });

//Routes
//app.use(require("./api/admin/admin.route"));
//app.use(require("./api/auth/auth.route"));
//app.use(require("./api/products/products.route"));

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
