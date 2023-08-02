module.exports = (sequelize, DataTypes) => {
  const PaymentsTypes = sequelize.define(
    "payments-types",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return PaymentsTypes;
};
