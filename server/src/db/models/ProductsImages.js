const { ApiErrors } = require("../../api/api/api.errors");
const {
  ProductsImagesErrors,
} = require("../../api/productsImages/productsImages.errors");

module.exports = (sequelize, DataTypes) => {
  const States = sequelize.define(
    "products-images",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          is: {
            args: /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,4}(\/\S*)?$/,
            msg: ApiErrors.URL_IMAGE_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return States;
};
