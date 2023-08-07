const argon2 = require("argon2");
const crypto = require("crypto");

const hashPassword = async (password) => {
  const salt = crypto.randomBytes(32);
  const hashedPassword = await argon2.hash(password, { salt });

  return hashedPassword;
};

module.exports = { hashPassword };
