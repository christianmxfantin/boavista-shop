module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      order: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return Orders;
};
