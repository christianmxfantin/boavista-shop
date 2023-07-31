const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const PaymentsType = require("./PaymentsType.js");
const Users = require("./Users.js");

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
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Payments;

PaymentsType.hasMany(Payments, {
  foreignKey: "paymentsTypeId",
  sourceKey: "id",
});

Payments.belongsTo(PaymentsType, {
  foreignKey: "paymentsTypeId",
  targetId: "id",
});

Users.hasMany(Payments, {
  foreignKey: "userId",
  sourceKey: "id",
});

Payments.belongsTo(Users, {
  foreignKey: "userId",
  targetId: "id",
});
