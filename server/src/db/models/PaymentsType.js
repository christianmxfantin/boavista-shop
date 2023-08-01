module.exports = (sequelize, DataTypes) => {
  const PaymentsType = sequelize.define(
    "payments-type",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      names: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return PaymentsType;
};
