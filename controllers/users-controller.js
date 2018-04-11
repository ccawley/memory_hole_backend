const { User } = require('../models')

class UsersController {
  constructor() {}

  static createUser (req, res, next) {
    User.createUser(req.body)
      .then(result => {
        return res.status(201).json(result)
      })
      .catch(console.error)
  }

  static message (req, res, next) {
    User.getUser()
      .then(user => {
        // console.log(user)
        return res.json({ user })
      })
      .catch(err => {
        console.log('Error!', err)
      })
  }

}

module.exports = UsersController
