const { v4: uuidv4 } = require("uuid");

const db = require("../models/index.js");
const Products = db.products;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = await Products.findAll();

    return queryInterface.bulkInsert("products-images", [
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347904/boavista-shop/products/...db/wu606ykn6nt1ioqulyxn.jpg",
        productId: products[0].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347879/boavista-shop/products/...db/ql7j33tut21yrabfcbjz.jpg",
        productId: products[0].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347878/boavista-shop/products/...db/rebtbk7mrpmtst1ifouh.jpg",
        productId: products[0].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347891/boavista-shop/products/...db/kppkjed5mtnwmp5akdfr.jpg",
        productId: products[1].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347896/boavista-shop/products/...db/pqc94qfav3xxtxeqqsos.jpg",
        productId: products[1].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347883/boavista-shop/products/...db/knu1nkjq5vztkytrsfdp.jpg",
        productId: products[2].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347898/boavista-shop/products/...db/hdbuexmqyyihlzacbp6x.png",
        productId: products[2].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347911/boavista-shop/products/...db/qflxhwijjulwdfi9ea0a.jpg",
        productId: products[3].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347877/boavista-shop/products/...db/jmyqd089jkbdb84axvjc.jpg",
        productId: products[3].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347860/boavista-shop/products/...db/nuyhle2jt6vznit3phft.jpg",
        productId: products[4].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347847/boavista-shop/products/...db/gzrnxok8nqwtusdckrbc.jpg",
        productId: products[4].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347871/boavista-shop/products/...db/f4mgvtxztfee3zzgur9l.jpg",
        productId: products[4].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347847/boavista-shop/products/...db/vwtfmwlpopq5qlgd6rsp.jpg",
        productId: products[5].id,
      },
      {
        id: uuidv4(),
        url: "https://res.cloudinary.com/christianmxfantin/image/upload/v1695347847/boavista-shop/products/...db/sacxr8tooulylqhzmppn.jpg",
        productId: products[5].id,
      },
    ]);
  },
};
