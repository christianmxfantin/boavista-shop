module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("roles", [
      {
        id: "45b5890a-16a6-4fa5-ad2e-e441d86f8fe5",
        name: "Admin",
      },
      {
        id: "f8e963ef-14d6-4194-9d6f-0a7905f3ac76",
        name: "User",
      },
      {
        id: "a61337e6-545a-447a-88da-a651c96f9b20",
        name: "Web",
      },
    ]);
  },
};
