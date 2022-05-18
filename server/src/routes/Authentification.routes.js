const router = require('express').Router();
const AuthentificationController = require('../controllers/Authentification.controller');

router.post('/register', AuthentificationController.register);
router.post('/login', AuthentificationController.login);

module.exports = router;