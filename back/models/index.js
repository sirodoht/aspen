/**
 * @file Sequelize models and relations master file.
 */

const path = require('path');
const config = require('config');

const Sequelize = require('sequelize');

const configPostgres = config.get('postgres');

const sequelize = new Sequelize(config.postgres.url, {
    logging: false,
});

const user = sequelize.import(path.join(__dirname, 'user.model.js'));

const db = {
  User: user,
  sequelize,
  Sequelize,
};

module.exports = db;
