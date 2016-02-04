var path = require('path');
var config = require('config');

var Sequelize = require('sequelize');

var configPostgres = config.get('postgres');
var sequelize = new Sequelize(configPostgres.database, configPostgres.uername, configPostgres.password, {
  host: configPostgres.host,
  dialect: 'postgres',
});

var user = sequelize.import(path.join(__dirname, 'user.model.js'));

var db = {
  User: user,
  sequelize: sequelize,
  Sequelize: Sequelize,
};

module.exports = db;
