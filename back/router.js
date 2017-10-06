/**
 * @file Koa Router.
 */

const router = require('koa-router')();

const homeCtrl = require('./controllers/home.ctrl');
const userCtrl = require('./controllers/user.ctrl');


router.get('/', homeCtrl.getIndex)
  .get('/register', userCtrl.getRegister)
  .post('/register', userCtrl.register)
  .get('/login', userCtrl.getLogin)
  .post('/login', userCtrl.login)
  .get('/logout', userCtrl.logout)
  .get('/:user', userCtrl.getUser);

module.exports = router;
