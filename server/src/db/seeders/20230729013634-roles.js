const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("roles", [
      {
        id: uuidv4(),
        name: "Admin",
      },
      {
        id: uuidv4(),
        name: "User",
      },
      {
        id: uuidv4(),
        name: "Web",
      },
    ]);
  },
};
