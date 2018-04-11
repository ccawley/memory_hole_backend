const express = require('express')
const router = express.Router()
const { UsersController } = require('../controllers')

router.post('/createUser', UsersController.createUser)
router.get('/userData', UsersController.message)

module.exports = router
