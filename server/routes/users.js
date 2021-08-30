const express = require('express');
const {signin, signin} = require('../controllers/user.js')

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signin)

module.exports = {
    postRoutes: router
}
