const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("payments-types", [
      {
        id: uuidv4(),
        name: "Débito",
      },
      {
        id: uuidv4(),
        name: "Crédito",
      },
    ]);
  },
};
