const { CountriesErrors } = require("../../api/countries/countries.errors");

module.exports = (sequelize, DataTypes) => {
  const Countries = sequelize.define(
    "countries",
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
            args: /^[\p{L} -]{1,100}$/u,
            msg: CountriesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Countries;
};
