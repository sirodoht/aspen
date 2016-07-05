const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/index.ctrl');
const userCtrl = require('../controllers/user.ctrl');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);

router.get('/', indexCtrl.getIndex);

router.get('/register', userCtrl.getRegister);
router.get('/login', userCtrl.getLogin);

router.get('/:user', userCtrl.getUser);

module.exports = router;
