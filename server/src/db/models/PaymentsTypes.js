const {
  PaymentsTypesErrors,
} = require("../../api/paymentsTypes/paymentsTypes.errors");

module.exports = (sequelize, DataTypes) => {
  const PaymentsTypes = sequelize.define(
    "payments-types",
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
            msg: PaymentsTypesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return PaymentsTypes;
};
