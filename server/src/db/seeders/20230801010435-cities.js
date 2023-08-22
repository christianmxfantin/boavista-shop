const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const Countries = db.countries;
const States = db.states;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countries = await Countries.findAll();
    const states = await States.findAll();

    return queryInterface.bulkInsert("cities", [
      {
        id: uuidv4(),
        name: "Coghlan",
        stateId: states[0].id,
        countryId: countries[0].id,
      },
      {
        id: uuidv4(),
        name: "Puerto Madero",
        stateId: states[0].id,
        countryId: countries[0].id,
      },
      {
        id: uuidv4(),
        name: "Avellaneda",
        stateId: states[1].id,
        countryId: countries[0].id,
      },
      {
        id: uuidv4(),
        name: "La Plata",
        stateId: states[1].id,
        countryId: countries[0].id,
      },
    ]);
  },
};
