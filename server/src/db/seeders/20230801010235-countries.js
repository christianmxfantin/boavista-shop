const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("countries", [
      {
        id: uuidv4(),
        name: "Argentina",
      },
    ]);
  },
};
