/**
 * @file User Sequelize model.
 */

const Promise = require('bluebird');
const bcrypt = require('bcrypt');


Promise.promisifyAll(require('bcrypt'));

const SALT_WORK_FACTOR = 10;

module.exports = function (sequelize, DataTypes) {
  const attributes = {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  };


  const User = sequelize.define('User', attributes);

  User.prototype.validPassword = function (pwd) {
    return bcrypt.compareAsync(pwd, this.password)
      .then(function (isMatch) {
        return isMatch;
      });
  };

  const hashPasswordHook = function (user) {
    return bcrypt.genSaltAsync(SALT_WORK_FACTOR)
      .then(function (salt) {
        return bcrypt.hashAsync(user.password, salt)
          .then(function (hash) {
            user.password = hash;
          });
      })
      .catch(function (err) {
        console.log('Password hook error:', err);
      });
  };

  User.beforeCreate(hashPasswordHook);
  User.beforeUpdate(hashPasswordHook);

  return User;
};
