const { UsersErrors } = require("../../api/users/users.errors");

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
          is: {
            args: /^[\p{L} -]{1,100}$/u,
            msg: UsersErrors.NAMES_INVALID,
          },
        },
      },
      surnames: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          regexSurnamesValidate(value) {
            if (value.length !== 0) {
              if (!/^[\p{L} -]{1,100}$/u.test(value)) {
                throw new Error(UsersErrors.SURNAMES_INVALID);
              }
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^(?=.{6,100}$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            msg: UsersErrors.EMAIL_INVALID,
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
  return Users;
};
