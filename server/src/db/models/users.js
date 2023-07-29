const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
const Roles = require("./Roles.js");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    // imageURL: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[\p{L} -]+$/u,
          msg: "Se ha ingresado un nombre inválido",
        },
        // len: {
        //   args: [1, 100],
        //   msg: "El nombre solo puede contener 1 caracter como mínimo y 100 como máximo",
        // },
      },
    },
    surnames: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          msg: "El email ingresado es inválido",
        },
      },
    },
    password: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Users;

// Users.associate = (models) => {
//   Users.belongsTo(models.roles);
// };

Roles.hasMany(Users, {
  foreignKey: "roleId",
  sourceKey: "id",
});

Users.belongsTo(Roles, {
  foreignKey: "roleId",
  targetId: "id",
});
