const { OrdersErrors } = require("../../api/orders/orders.errors");

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      order: {
        type: DataTypes.JSONB,
        allowNull: false,
        validate: {
          jsonValidate(value) {
            if (!JSON.parse(value)) {
              throw new Error(OrdersErrors.ORDER_INVALID);
            }
          },
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return Orders;
};
