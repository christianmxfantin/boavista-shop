const { CitiesErrors } = require("../../api/cities/cities.errors");

module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define(
    "cities",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s\/]{1,50}$/,
            msg: CitiesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Cities;
};
