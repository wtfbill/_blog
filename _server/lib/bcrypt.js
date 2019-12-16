const bcrypt = require("bcryptjs");
const _ = require("loadsh");
// 密码加密
exports.passwordHash = async password => {
  return await bcrypt.hashSync(password, 10);
};

exports.passwordIsSame = async (password, mysql_password) => {
  return _.isEqual(password, mysql_password);
};
// 密码校验
exports.passwordCompare = async (password, passwordHash) => {
  return await bcrypt.compareSync(password, passwordHash);
};
