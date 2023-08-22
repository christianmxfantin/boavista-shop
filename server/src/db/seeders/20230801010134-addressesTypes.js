const { v4: uuidv4 } = require("uuid");

const db = require("../../db/models/index.js");
const Users = db.users;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await Users.findAll();

    return queryInterface.bulkInsert("addresses-types", [
      {
        id: uuidv4(),
        name: "Casa",
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Trabajo",
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Casa",
        userId: users[2].id,
      },
      {
        id: uuidv4(),
        name: "Local",
        userId: users[2].id,
      },
    ]);
  },
};
