const { config } = require("../../config/config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: config.dbDial,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((error) => {
    console.error("Unable to connect to the Database:", error);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require("./Roles.js")(sequelize, DataTypes);
db.users = require("./Users.js")(sequelize, DataTypes);
db.addresses = require("./Addresses.js")(sequelize, DataTypes);
db.payments = require("./Payments.js")(sequelize, DataTypes);
db.paymentsTypes = require("./PaymentsTypes.js")(sequelize, DataTypes);
db.orders = require("./Orders.js")(sequelize, DataTypes);
db.products = require("./Products.js")(sequelize, DataTypes);
db.discounts = require("./Discounts.js")(sequelize, DataTypes);
db.categories = require("./Categories.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database sync");
});

//Users with Roles
db.roles.hasMany(db.users, {
  foreignKey: "roleId",
  sourceKey: "id",
});
db.users.belongsTo(db.roles, {
  foreignKey: "roleId",
  targetId: "id",
});

//Products with Discounts
db.discounts.hasMany(db.products, {
  foreignKey: "discountId",
  sourceKey: "id",
});
db.products.belongsTo(db.discounts, {
  foreignKey: "discountId",
  targetId: "id",
});

//Products with Categories
db.categories.hasMany(db.products, {
  foreignKey: "categoryId",
  sourceKey: "id",
});
db.products.belongsTo(db.categories, {
  foreignKey: "categoryId",
  targetId: "id",
});

//Addresses with Users
db.users.hasMany(db.addresses, {
  foreignKey: "userId",
  sourceKey: "id",
});
db.addresses.belongsTo(db.users, {
  foreignKey: "userId",
  targetId: "id",
});

//Payments with PaymentsType
db.paymentsTypes.hasMany(db.payments, {
  foreignKey: "paymentTypeId",
  sourceKey: "id",
});
db.payments.belongsTo(db.paymentsTypes, {
  foreignKey: "paymentTypeId",
  targetId: "id",
});

//Payments with Users
db.users.hasMany(db.payments, {
  foreignKey: "userId",
  sourceKey: "id",
});
db.payments.belongsTo(db.users, {
  foreignKey: "userId",
  targetId: "id",
});

//Orders with Users
db.users.hasMany(db.orders, {
  foreignKey: "userId",
  sourceKey: "id",
});
db.orders.belongsTo(db.users, {
  foreignKey: "userId",
  targetId: "id",
});

module.exports = db;
