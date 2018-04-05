const express = require('express')
const router = express.Router()
const { UsersController } = require('../controllers')

router.get('/userName', UsersController.message)

module.exports = router
