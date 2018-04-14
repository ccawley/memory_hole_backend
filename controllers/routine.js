const { Routine } = require('../models')

class DataAdder {
  cosntructor(){
  }

  static getDay(req, res, next) {
    let {date, user_id} = req.query
    Routine.getDay(Number(user_id), date)
      .then(day => {
        console.log('day data', day)
        res.status(200).json({ day })
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({ message: 'Could not retrieve selected day.'})
      })
  }

  static addMorningData(req, res, next) {
    // console.log(req.body);
    Routine.Morning.newMorning(req.body)
      .then(result => {
        // console.log(result)
        return res.status(201).json({ message: 'Successfully posted morning data.' })
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({ message: 'Morning data not successfully posted.' })
      })
  }

  static addEveningData(req, res, next) {
    // console.log(req.body);
    Routine.Evening.newEvening(req.body)
      .then(result => {
        // console.log(result)
        return res.status(201).json({ message: 'Successfully posted evening data.' })
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({ message: 'Evening data not successfully posted.' })
      })
  }
}

module.exports = DataAdder
