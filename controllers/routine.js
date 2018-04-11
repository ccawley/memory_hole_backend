const { Routine } = require('../models')

class DataAdder {
  cosntructor(){

  }

  static addMorningData(req, res, next) {
    console.log(req.body);
    // res.send(200)

    Routine.newMorning(req.body)
      .then(result => {
        console.log(result)
        return res.status(201).json({ message: 'Successfully posted morning data.' })
      })
      .catch(console.error)
  }

  static addEveningData(req, res, next) {
    console.log(req.body);
    // res.send(200)

    Routine.newEvening(req.body)
      .then(result => {
        console.log(result)
        return res.status(201).json({ message: 'Successfully posted evening data.' })
      })
      .catch(console.error)
  }
}

module.exports = DataAdder
