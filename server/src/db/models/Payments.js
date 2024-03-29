const { PaymentsErrors } = require("../../api/payments/payments.errors");

module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define(
    "payments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      finalNumber: {
        type: DataTypes.STRING(4),
        allowNull: false,
        validate: {
          is: {
            args: /^[0-9]{1,4}$/,
            msg: PaymentsErrors.FINAL_NUMBER_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Payments;
};
