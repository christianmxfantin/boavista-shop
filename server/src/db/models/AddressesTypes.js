const {
  AddressesTypesErrors,
} = require("../../api/addressesTypes/addressesTypes.errors");

module.exports = (sequelize, DataTypes) => {
  const AddressesTypes = sequelize.define(
    "addresses-types",
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
            args: /^[\p{L} -]{1,50}$/u,
            msg: AddressesTypesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return AddressesTypes;
};
