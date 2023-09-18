const {
  CardCompaniesErrors,
} = require("../../api/cardCompanies/cardCompanies.errors");

module.exports = (sequelize, DataTypes) => {
  const CardCompanies = sequelize.define(
    "card-companies",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[\p{L} -]{1,50}$/u,
            msg: CardCompaniesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return CardCompanies;
};
