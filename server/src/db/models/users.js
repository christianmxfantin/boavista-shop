const { emptyField, lengthField } = require("../../api/errors");

module.exports = (sequelize, DataTypes) => {
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
      //   validate: {
      //     notEmpty: {
      //       msg: emptyField("imágen URL"),
      //     },
      //   },
      // },
      names: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: emptyField("nombre"),
          },
          len: {
            args: [1, 100],
            msg: lengthField("nombre", 1, 100),
          },
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
          notEmpty: {
            msg: emptyField("email"),
          },
          len: {
            args: [6, 255],
            msg: lengthField("email", 6, 255),
          },
        },
      },
      password: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: emptyField("contraseña"),
          },
          len: {
            args: [8, 18],
            msg: lengthField("contraseña", 8, 18),
          },
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return Users;
};
