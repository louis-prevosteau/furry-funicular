const router = require('express').Router();
const UserController = require('../controllers/User.controller');
const { authentificate } = require('../middleware/Auth.middleware');

router.get('/', authentificate, UserController.getUsers);
router.route('/:id')
      .get(authentificate, UserController.getUser)
      .put(authentificate, UserController.updateUser)
      .delete(authentificate, UserController.deleteUser);
router.put('/:id/follow', authentificate, UserController.follow);
router.put('/:id/unfollow', authentificate, UserController.unfollow);

module.exports = router;