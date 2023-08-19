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
      companyCard: {
        type: DataTypes.STRING(100),
        allowNull: false,
        // unique: true,
        validate: {
          is: {
            args: /^[\p{L} -]{1,100}$/u,
            msg: PaymentsErrors.COMPANY_CARD_INVALID,
          },
        },
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
