const PaymentsType = require("./PaymentsType.js");
module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define(
    "payments",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      company_card: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      final_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Payments.associate = (models) => {
    Payments.belongsTo(models["payments-type"]);
  };

  return Payments;
};
