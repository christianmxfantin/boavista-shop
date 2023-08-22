const { AddressesErrors } = require("../../api/addresses/addresses.errors");

module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define(
    "addresses",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s\-\.,#]{1,100}$/,
            msg: AddressesErrors.ADDRESS_INVALID,
          },
        },
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          is: {
            args: /^(?=.*[0-9].*)[0-9()+ -]{5,100}$/,
            msg: AddressesErrors.PHONE_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Addresses;
};
