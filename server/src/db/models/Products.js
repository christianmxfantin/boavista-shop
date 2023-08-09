const { emptyField, lengthField } = require("../db.errors");

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
      // imageURL: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: emptyField("nombre"),
          },
          len: {
            args: [1, 100],
            msg: lengthField("nombre", 1, 100),
          },
        },
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: emptyField("precio"),
          },
          isDecimal: {
            msg: "Solo se permiten números decimales",
          },
          checkDecimalLength(value) {
            const stringValue = value.toString();
            const [integerPart, decimalPart] = stringValue.split(".");

            if (integerPart.length > 10) {
              throw new Error(
                "Solo puedes ingresar hasta 10 dígitos antes del punto decimal"
              );
            }

            if (decimalPart && decimalPart.length > 2) {
              throw new Error(
                "Solo puedes ingresar hasta 2 dígitos después del punto decimal"
              );
            }
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: {
            msg: emptyField("stock"),
          },
          len: {
            args: [1, 10],
            msg: lengthField("stock", 1, 10),
          },
          isInt: {
            msg: "Solo se permiten números",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Products;
};
