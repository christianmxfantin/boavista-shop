const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        id: uuidv4(),
        name: "Escritura",
      },
      {
        id: uuidv4(),
        name: "Borradores y Correctores",
      },
      {
        id: uuidv4(),
        name: "Accesorios",
      },
    ]);
  },
};
