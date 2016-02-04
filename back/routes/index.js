var express = require('express');
var router = express.Router();

var indexCtrl = require('../controllers/index.ctrl');
var userCtrl = require('../controllers/user.ctrl');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);

router.get('/', indexCtrl.getIndex);

router.get('/register', userCtrl.getRegister);
router.get('/login', userCtrl.getLogin);

router.get('/:user', userCtrl.getUser);

module.exports = router;
