const { config } = require("../../config/config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
  host: config.dbHost,
  dialect: config.dbDial,
});

sequelize.authenticate();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.roles = require("./Roles.js")(sequelize, DataTypes);
db.users = require("./Users.js")(sequelize, DataTypes);
db.addresses = require("./Addresses.js")(sequelize, DataTypes);
db.addressesTypes = require("./AddressesTypes.js")(sequelize, DataTypes);
db.cities = require("./Cities.js")(sequelize, DataTypes);
db.states = require("./States.js")(sequelize, DataTypes);
db.countries = require("./Countries.js")(sequelize, DataTypes);
db.payments = require("./Payments.js")(sequelize, DataTypes);
db.cardCompanies = require("./CardCompanies.js")(sequelize, DataTypes);
db.paymentsTypes = require("./PaymentsTypes.js")(sequelize, DataTypes);
db.orders = require("./Orders.js")(sequelize, DataTypes);
db.products = require("./Products.js")(sequelize, DataTypes);
db.discounts = require("./Discounts.js")(sequelize, DataTypes);
db.categories = require("./Categories.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false });

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

//Products with Users
db.users.hasMany(db.products, {
  foreignKey: "userId",
  sourceKey: "id",
});
db.products.belongsTo(db.users, {
  foreignKey: "userId",
  targetId: "id",
});

//Cities with States
db.states.hasMany(db.cities, {
  foreignKey: "stateId",
  sourceKey: "id",
});
db.cities.belongsTo(db.states, {
  foreignKey: "stateId",
  targetId: "id",
});

//Cities with Countries
db.countries.hasMany(db.cities, {
  foreignKey: "countryId",
  sourceKey: "id",
});
db.cities.belongsTo(db.countries, {
  foreignKey: "countryId",
  targetId: "id",
});

//States with Countries
db.countries.hasMany(db.states, {
  foreignKey: "countryId",
  sourceKey: "id",
});
db.states.belongsTo(db.countries, {
  foreignKey: "countryId",
  targetId: "id",
});

//AddressesTypes with Users
db.users.hasMany(db.addressesTypes, {
  foreignKey: "userId",
  sourceKey: "id",
});
db.addressesTypes.belongsTo(db.users, {
  foreignKey: "userId",
  targetId: "id",
});

//Addresses with AddressesTypes
db.addressesTypes.hasMany(db.addresses, {
  foreignKey: "addressTypeId",
  sourceKey: "id",
});
db.addresses.belongsTo(db.addressesTypes, {
  foreignKey: "addressTypeId",
  targetId: "id",
});

//Addresses with Cities
db.cities.hasMany(db.addresses, {
  foreignKey: "cityId",
  sourceKey: "id",
});
db.addresses.belongsTo(db.cities, {
  foreignKey: "cityId",
  targetId: "id",
});

//Addresses with States
db.states.hasMany(db.addresses, {
  foreignKey: "stateId",
  sourceKey: "id",
});
db.addresses.belongsTo(db.states, {
  foreignKey: "stateId",
  targetId: "id",
});

//Addresses with Countries
db.countries.hasMany(db.addresses, {
  foreignKey: "countryId",
  sourceKey: "id",
});
db.addresses.belongsTo(db.countries, {
  foreignKey: "countryId",
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

//Payments with CardCompanies
db.cardCompanies.hasMany(db.payments, {
  foreignKey: "cardCompanyId",
  sourceKey: "id",
});
db.payments.belongsTo(db.cardCompanies, {
  foreignKey: "cardCompanyId",
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
