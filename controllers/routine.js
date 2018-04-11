const { Routine } = require('../models')

function addMorningData(req, res, next) {
  console.log(req.body);
  res.send(200)
}

module.exports = addMorningData
