const express = require('express');
const logger = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const routes = require('./routes/index');
const models = require('./models');
const helpers = require('./util/helpers');
const listeners = require('./util/listeners');

const app = express();

app.set('views', path.join(__dirname, '../front/views'));
app.set('view engine', 'pug');

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(favicon(path.join(__dirname, '../front/static', 'favicon.ico')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
    // session: false,
}, function (username, password, done) {
  models.User.findOne({
    where: {
      username: username
    }
  }).then(function (user) {
    if (!user) {
      return done(null, false, {
        message: 'Incorrect username.'
      });
    }
    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Incorrect password.'
      });
    }
    return done(null, user);
  }).catch(function (err) {
    console.log('Passport error:', err);
  });
}
));

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (username, done) {
  models.User.findOne({
    where: {
      username
    }
  }).then(function (user) {
    done(null, user);
  });
});

app.use(express.static(path.join(__dirname, '../front/static')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler, will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler, no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const port = helpers.normalizePort(process.env.PORT || '3000');
app.set('port', port);

models.sequelize.sync()
  .then(function () {
    app.listen(port);
    app.on('error', listeners.onError);
    app.on('listening', listeners.onListening);
    console.log('Server running on port ' + port);
  });

module.exports = app;
