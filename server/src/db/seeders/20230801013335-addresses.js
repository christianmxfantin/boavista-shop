const { v4: uuidv4 } = require("uuid");

const db = require("../../db/models/index.js");
const Users = db.users;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await Users.findAll();

    return queryInterface.bulkInsert("addresses", [
      {
        id: uuidv4(),
        type: "Casa",
        address: "Lavalleja 2232 5to Piso Depto 40",
        state: "Ciudad Autónoma de Buenos Aires",
        city: "Coghlan",
        country: "Argentina",
        phone: "(11) 4444-4589",
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        type: "Trabajo",
        address: "Azucena Villaflor 34",
        state: "Ciudad Autónoma de Buenos Aires",
        city: "Puerto Madero",
        country: "Argentina",
        phone: "(11) 4444-4589",
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        type: "Casa",
        address: "Av Mitre 4540",
        state: "Buenos Aires",
        city: "Avellaneda",
        country: "Argentina",
        phone: "(11) 3322-8765",
        userId: users[2].id,
      },
      {
        id: uuidv4(),
        type: "Local",
        address: "Calle 5 N° 1340",
        state: "Buenos Aires",
        city: "La Plata",
        country: "Argentina",
        phone: "(0221) 45-3489",
        userId: users[2].id,
      },
    ]);
  },
};
