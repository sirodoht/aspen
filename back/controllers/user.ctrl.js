const passport = require('passport');

const models = require('../models');

const userCtrl = module.exports = {};

userCtrl.getUser = function (req, res) {
  const userParam = req.params.user;

  models.User.findOne({
    where: {
      username: userParam,
    }
  }).then(function (user) {
    if (user !== null) {
      res.render('user', {
        email: user.dataValues.email,
        name: user.dataValues.name,
        username: user.dataValues.username,
      });
    } else {
      res.sendStatus(404);
    }
  });
};

userCtrl.getRegister = function (req, res) {
  res.render('register');
};

userCtrl.register = function (req, res) {
  models.User.create({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(function () {
    res.redirect('/' + req.body.username);
  });
};

userCtrl.getLogin = function (req, res) {
  res.render('login');
};

userCtrl.login = function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    res.redirect('/' + user.username);
    if (err) {
      next(err);
    }
    if (!user) {
      res.redirect('/login');
    }
  })(req, res, next);
};
