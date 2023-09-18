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
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z\s]{1,20}$/,
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
