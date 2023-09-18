const { RolesErrors } = require("../../api/roles/roles.errors");

module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define(
    "roles",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[\p{L} -]{1,50}$/u,
            msg: RolesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Roles;
};
