const { ProductsErrors } = require("../../api/products/products.errors");

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s\-.,!()+]{1,100}$/,
            msg: ProductsErrors.NAME_INVALID,
          },
        },
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: {
            msg: ProductsErrors.PRICE_INVALID,
          },
          checkDecimalLength(value) {
            const stringValue = value.toString();
            const [integerPart, decimalPart] = stringValue.split(".");

            if (integerPart.length > 10) {
              throw new Error(ProductsErrors.PRICE_INTEGER_PART);
            }

            if (decimalPart && decimalPart.length > 2) {
              throw new Error(ProductsErrors.PRICE_DECIMAL_PART);
            }
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          stockValidate(value) {
            if (value.length !== 0) {
              if (!/^\d{1,10}$/.test(value)) {
                throw new Error(ProductsErrors.STOCK_INVALID);
              }
            }
          },
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return Products;
};
