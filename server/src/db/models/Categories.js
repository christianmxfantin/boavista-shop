const { CategoriesErrors } = require("../../api/categories/categories.errors");

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "categories",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          is: {
            args: /^[\p{L} -]{1,100}$/u,
            msg: CategoriesErrors.NAME_INVALID,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
  return Categories;
};
