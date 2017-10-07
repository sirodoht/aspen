/**
 * aspen
 * Node.js web application boilerplate.
 *
 * @author Theodore Keloglou
 * @file Main application boot file.
 */

const path = require('path');

const Koa = require('koa');
const views = require('koa-views');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const session = require('koa-session');
const static = require('koa-static');
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const favicon = require('koa-favicon');
const config = require('config');
const Op = require('sequelize').Op;

const models = require('./models/index');
const router = require('./router');

const app = module.exports = new Koa();

app.use(logger());

app.use(views(path.join(__dirname, '../front/views'), {
  extension: 'pug',
}));

app.use(bodyParser());

app.keys = [config.sessionSecret];
app.use(session(config.session, app));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await models.User.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    done(null, user);
  } catch(err) {
    done(err);
  }
});

passport.use(new LocalStrategy(function (username, password, done) {
  models.User.findOne({
    where: {
      username: {
        [Op.eq]: username,
      },
    },
  })
    .then((user) => {
      if (!user) {
        done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.validPassword(password)) {
        done(null, false, {
          message: 'Incorrect password.'
        });
      }
      done(null, user);
    })
    .catch((err) => {
      console.log('Passport error:', err);
      done(err);
    });
}
));

app.use(cors());

app.use(router.routes());

app.use(static(path.join(__dirname, '../front/static')));

app.use(favicon(path.join(__dirname, '../front/static/favicon.ico')));

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
