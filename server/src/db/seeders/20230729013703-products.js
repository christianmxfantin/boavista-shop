const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Lápices",
        price: 130,
        stock: 200,
        //discountId
        // categoryId: "45b5890a-16a6-4fa5-ad2e-e441d86f8fe5", //admin
      },
    ]);
  },
};
