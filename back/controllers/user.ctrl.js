/**
 * @file User views controller.
 */

const passport = require('koa-passport');
const Op = require('sequelize').Op;

const models = require('../models/index');


const userCtrl = module.exports = {};

userCtrl.getUser = async function getUser(ctx) {
  const user = await models.User.findOne({
    where: {
      username: {
        [Op.eq]: ctx.params.user,
      },
    },
  });
  if (user !== null) {
    await ctx.render('user', {
      email: user.dataValues.email,
      name: user.dataValues.name,
      username: user.dataValues.username,
    });
  } else {
    ctx.status = 404;
  }
};

userCtrl.getRegister = async function getRegister(ctx) {
  await ctx.render('register');
};

userCtrl.register = async function register(ctx) {
  await models.User.create({
    username: ctx.request.body.username,
    name: ctx.request.body.name,
    email: ctx.request.body.email,
    password: ctx.request.body.password,
  });
  ctx.redirect(`/${ctx.request.body.username}`);
};

userCtrl.getLogin = async function getLogin(ctx) {
  await ctx.render('login');
};

userCtrl.login = async function login(ctx) {
  return passport.authenticate('local', function(err, user) {
    if (user === false) {
      ctx.throw(401);
    } else {
      ctx.login(user);
      ctx.redirect(`/${user.username}`);
    }
  })(ctx);
};

userCtrl.logout = async function logout(ctx) {
  ctx.logout();
  ctx.redirect('/');
};
