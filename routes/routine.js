const express = require('express')
const router = express.Router()
const { RoutineController } = require('../controllers')

router.post('/morning', RoutineController.addMorningData)

module.exports = router
