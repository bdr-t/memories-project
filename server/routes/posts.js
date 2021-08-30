const express = require('express');
const {getPost, getPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch} = require('../controllers/posts.js')
const {auth} = require('../middleware/auth.js')

const router = express.Router()

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);


module.exports = {
    postRoutes: router
}
