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
      type: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z\s]{1,20}$/,
            msg: AddressesErrors.TYPE_INVALID,
          },
        },
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
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Argentina",
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Addresses;
};
