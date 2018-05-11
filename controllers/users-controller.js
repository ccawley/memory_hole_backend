const { User } = require('../models');
// const { jwtSignAsync } = require('../utils/jsonwebTokenAsync');
// const { TOKEN_SECRET } = process.env;

class UsersController {
  constructor() {}

  static createUser (req, res, next) {
    let { user_name, first_name, password } = req.body

    if (!user_name || !first_name || !password) {
      return res.status(401).json({ message: "Username, first name, and password required."})
    }

    User.checkUser(user_name)
      .then(user => {
        if (user) {
          return res.status(400).json({ message: "User already exists!" })
        }
        return User.createUser(user_name, first_name, password)
      })
      // Have a bug where even if user exists and code above runs, the ultimate result in the terminal is the 201 status below...
      .then(newUser => {
        return res.status(201).json({ message: "New user succesfully created."})
      })
      .catch(error => {
        return next(error)
      })
  }

  static login (req, res, next) {
    let { user_name, password } = req.body

    if (!user_name || !password) {
      return next ({ status: 400, message: "Username and password required." })
    } else {
      User.tryLoginUser(user_name, password)
      .then(user => {
        if (user === false) {
          return next({ status: 401, message: "Incorrect password." })
        } else if (user === 'User does not exist.') {
          return next({ status: 401, message: "User does not exist."})
        }
        return res.status(200).json(user)
      })
      .catch(error => {
        return next(error)
      })
    }
  }

}

module.exports = UsersController
