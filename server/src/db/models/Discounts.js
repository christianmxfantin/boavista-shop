const { DiscountsErrors } = require("../../api/discounts/discounts.errors");

module.exports = (sequelize, DataTypes) => {
  const Discounts = sequelize.define(
    "discounts",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          percentageValidate(value) {
            if (value.length !== 0) {
              if (!/^\d{1,3}$/.test(value) && (value > 0 || value < 101)) {
                throw new Error(DiscountsErrors.PERCENTAGE_INVALID);
              }
            }
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Discounts;
};
