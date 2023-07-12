const { Users, UserSchema } = require("./users");

function setupModels(sequelize) {
  Users.init(UserSchema, Users.config(sequelize));
}

module.exports = setupModels;
