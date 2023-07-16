const Sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Administrator",
      },
      {
        name: "User",
      },
      {
        name: "Web",
      },
    ]);
  },
};
