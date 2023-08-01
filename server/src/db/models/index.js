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
db.products = require("./Products.js")(sequelize, DataTypes);
db.discounts = require("./Discounts.js")(sequelize, DataTypes);
db.categories = require("./Categories.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database sync");
});

//Users and Roles
db.roles.hasMany(db.users, {
  foreignKey: "roleId",
  sourceKey: "id",
});
db.users.belongsTo(db.roles, {
  foreignKey: "roleId",
  targetId: "id",
});

//Products and Discounts
db.discounts.hasMany(db.products, {
  foreignKey: "discountId",
  sourceKey: "id",
});
db.products.belongsTo(db.discounts, {
  foreignKey: "roleId",
  targetId: "id",
});

module.exports = db;
