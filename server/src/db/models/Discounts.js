module.exports = (sequelize, DataTypes) => {
  const Discounts = sequelize.define(
    "discounts",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Discounts;
};
