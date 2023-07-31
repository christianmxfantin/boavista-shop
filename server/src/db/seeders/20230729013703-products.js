const { v4: uuidv4 } = require("uuid");
const Categories = require("../models/Categories");
const Discounts = require("../models/Discounts");
const Products = require("../models/Products");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async (t) => {
      try {
        const categories = await Categories.bulkInsert(
          [
            {
              name: "Escritura",
            },
            {
              name: "Borradores y Correctores",
            },
            {
              name: "Accesorios",
            },
          ],
          { transaction: t }
        );

        const discounts = await Discounts.bulkInsert(
          [
            {
              name: 0,
            },
            {
              name: 20,
            },
            {
              name: 30,
            },
          ],
          { transaction: t }
        );

        await Products.bulkInsert(
          [
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
          ],
          { transaction: t }
        );

        //Confirm the transaction
        await t.commit();
      } catch (error) {
        //Undo the transaction
        await t.rollback();
        throw error;
      }
    });
  },
};
