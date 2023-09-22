const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const Categories = db.categories;
const Discounts = db.discounts;
const Users = db.users;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await Categories.findAll();
    const discounts = await Discounts.findAll();
    const users = await Users.findAll();

    return queryInterface.bulkInsert("products", [
      {
        id: uuidv4(),
        name: "Lapicera Bic x 50 unidades",
        price: 3499.99,
        stock: 1200,
        createdAt: new Date(),
        updatedAt: new Date(),
        discountId: discounts[0].id,
        categoryId: categories[0].id, //Escritura
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Marcador Schneider para Pizarra x 6 unidades",
        price: 7015.24,
        stock: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
        discountId: discounts[0].id,
        categoryId: categories[0].id, //Escritura
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Lápices Staedtler x 24 unidades",
        price: 6735.32,
        stock: 1200,
        createdAt: new Date(),
        updatedAt: new Date(),
        discountId: discounts[1].id,
        categoryId: categories[0].id, //Escritura
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Goma de borrar Staedtler Tinta/Lápiz x 10 unidades",
        price: 4515.16,
        stock: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
        discountId: discounts[1].id,
        categoryId: categories[1].id, //Borradores y Correctores
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Transportador Escolar Pizzini 180 grados x 12 unidades",
        price: 2765.2,
        stock: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
        discountId: discounts[1].id,
        categoryId: categories[2].id, //Accesorios
        userId: users[1].id,
      },
      {
        id: uuidv4(),
        name: "Compáses Pizzini Escolar x 6 unidades",
        price: 11997.63,
        stock: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
        discountId: discounts[2].id,
        categoryId: categories[2].id, //Accesorios
        userId: users[1].id,
      },
    ]);
  },
};
