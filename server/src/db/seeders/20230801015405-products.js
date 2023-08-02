const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const Categories = db.categories;
const Discounts = db.discounts;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await Categories.findAll();
    const discounts = await Discounts.findAll();

    return queryInterface.bulkInsert("products", [
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Lapicera Bic x 24 unidades",
        price: 499.99,
        stock: 1200,
        discountId: discounts[0].id,
        categoryId: categories[0].id, //Escritura
      },
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Marcador Schneider Trazo fino x 6 unidades",
        price: 495.24,
        stock: 500,
        discountId: discounts[0].id,
        categoryId: categories[0].id, //Escritura
      },
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Lápices Schneider x 24 unidades",
        price: 498.32,
        stock: 1200,
        discountId: discounts[1].id,
        categoryId: categories[0].id, //Escritura
      },
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Goma de borrar Staedtler Tinta/Lápiz x 12 unidades",
        price: 602.16,
        stock: 700,
        discountId: discounts[1].id,
        categoryId: categories[1].id, //Borradores y Correctores
      },
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Transportador Pizzini x 12 unidades",
        price: 765.2,
        stock: 500,
        discountId: discounts[1].id,
        categoryId: categories[2].id, //Accesorios
      },
      {
        id: uuidv4(),
        // imageURL: "",
        name: "Compáses Pizzini x 12 unidades",
        price: 997.63,
        stock: 400,
        discountId: discounts[2].id,
        categoryId: categories[2].id, //Accesorios
      },
    ]);
  },
};
