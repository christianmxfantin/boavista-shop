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
        // unique: true,
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
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s\/]{1,50}$/,
            msg: AddressesErrors.STATE_INVALID,
          },
        },
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s\/]{1,50}$/,
            msg: AddressesErrors.CITY_INVALID,
          },
        },
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "Argentina",
        // unique: true,
        validate: {
          is: {
            args: /^[a-zA-Z0-9\s\/]{1,100}$/,
            msg: AddressesErrors.COUNTRY_INVALID,
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
