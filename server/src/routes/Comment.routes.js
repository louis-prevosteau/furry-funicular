const router = require('express').Router();
const postCommentController = require('../controllers/Comment.controller');

router.post(
    '/:post_id',
    postCommentController.create
);
router.put(
    '/:post_id/:comment_id/',
    postCommentController.update
);
router.delete(
    '/:post_id/:comment_id',
    postCommentController.delete
);

module.exports = router;
