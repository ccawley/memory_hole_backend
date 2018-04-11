const express = require('express')
const router = express.Router()
const { RoutineController } = require('../controllers')

router.post('/morning', RoutineController.addMorningData)
router.post('/evening', RoutineController.addEveningData)

module.exports = router
