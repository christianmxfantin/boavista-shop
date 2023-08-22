const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const Countries = db.countries;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countries = await Countries.findAll();

    return queryInterface.bulkInsert("states", [
      {
        id: uuidv4(),
        name: "Ciudad Autónoma de Buenos Aires",
        countryId: countries[0].id,
      },
      {
        id: uuidv4(),
        name: "Buenos Aires",
        countryId: countries[0].id,
      },
    ]);
  },
};
