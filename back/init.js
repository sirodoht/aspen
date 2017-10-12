/**
 * @file Initialize database and web server.
 */

const config = require('config');

const models = require('./models/index');
const app = require('./app');

const port = process.env.PORT || config.port;

// models.sequelize.sync({ force: true })
models.sequelize.sync()
  .then(() => {
    app.listen(port);
    app.on('error', (error) => {
      console.error('App error:', error);
      process.exit(1);
    });
    console.log(`Server running on port ${port}`);
  });
