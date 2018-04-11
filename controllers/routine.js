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
        return res.status(201).json({ message: 'You done created a thing.' })
      })
      .catch(console.error)
  }
}

module.exports = DataAdder
