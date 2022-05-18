const router = require('express').Router();
const postCommentController = require('../controllers/Comment.controller');

router.post(
    '/comments/create',
    postCommentController.create
);
router.put(
    '/:comment_id/update',
    postCommentController.update
);
router.delete(
    '/:comment_id/delete',
    postCommentController.delete
);

module.exports = router;
