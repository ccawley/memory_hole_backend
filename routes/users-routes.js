const express = require('express')
const router = express.Router()
const { UsersController } = require('../controllers')

router.post('/createUser', UsersController.createUser)
router.post('/login', UsersController.login)

module.exports = router
