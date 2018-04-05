const { User } = require('../models')

class UsersController {
  constructor() {}

  static message (req, res, next) {
    User.getUser()
      .then(user => {
        return res.json({ user })
      })
      .catch(err => {
        console.log('Error!', err)
      })
  }

}

module.exports = UsersController
