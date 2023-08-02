const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("discounts", [
      {
        id: uuidv4(),
        percentage: 0,
      },
      {
        id: uuidv4(),
        percentage: 20,
      },
      {
        id: uuidv4(),
        percentage: 30,
      },
    ]);
  },
};
