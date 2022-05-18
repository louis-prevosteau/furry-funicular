const router = require('express').Router();
const postCommentController = require('../controllers/Comment.controller');

router.post(
    '/:post_id/comments/create',
    postCommentController.create
);
router.put(
    '/:post_id/:comment_id/update',
    postCommentController.update
);
router.delete(
    '/:post_id/:comment_id/delete',
    postCommentController.delete
);

module.exports = router;
