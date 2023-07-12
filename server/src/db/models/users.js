const { Model, DataTypes } = require("sequelize");

const USERS_TABLE = "users";

class Users extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: "Users",
      timestamps: true,
    };
  }
}

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  names: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "names",
  },
  surnames: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "surnames",
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "email",
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "password",
  },
};

module.exports = { Users, UserSchema };
