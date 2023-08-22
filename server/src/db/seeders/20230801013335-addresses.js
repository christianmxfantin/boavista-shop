const { v4: uuidv4 } = require("uuid");

const db = require("../../db/models/index.js");
const AddressesTypes = db.addressesTypes;
const Cities = db.cities;
const States = db.states;
const Countries = db.countries;
const Users = db.users;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const addressesTypes = await AddressesTypes.findAll();
    const cities = await Cities.findAll();
    const states = await States.findAll();
    const countries = await Countries.findAll();
    const users = await Users.findAll();

    return queryInterface.bulkInsert("addresses", [
      {
        id: uuidv4(),
        address: "Lavalleja 2232 5to Piso Depto 40",
        phone: "(11) 4444-4589",
        addressTypeId: addressesTypes[0].id,
        cityId: cities[0].id,
        stateId: states[0].id,
        countryId: countries[0].id,
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        address: "Azucena Villaflor 34",
        phone: "(11) 4444-4589",
        addressTypeId: addressesTypes[1].id,
        cityId: cities[1].id,
        stateId: states[0].id,
        countryId: countries[0].id,
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        address: "Av Mitre 4540",
        phone: "(11) 3322-8765",
        addressTypeId: addressesTypes[2].id,
        cityId: cities[2].id,
        stateId: states[1].id,
        countryId: countries[0].id,
        userId: users[2].id,
      },
      {
        id: uuidv4(),
        address: "Calle 5 N° 1340",
        phone: "(0221) 45-3489",
        addressTypeId: addressesTypes[3].id,
        cityId: cities[3].id,
        stateId: states[1].id,
        countryId: countries[0].id,
        userId: users[2].id,
      },
    ]);
  },
};
