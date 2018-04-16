const { User } = require('../models');
// const { jwtSignAsync } = require('../utils/jsonwebTokenAsync');
// const { TOKEN_SECRET } = process.env;

class UsersController {
  constructor() {}

  static createUser (req, res, next) {
    User.createUser(req.body)
      .then(newUser => {
        return res.status(201).json({ message: "New user succesfully created."})
      })
      .catch(console.error)
  }

  static login (req, res, next) {
    let username = req.body.user_name
    let password = req.body.password

    if (!username || !password) {
      return res.status(401).json({ message: "Username and password required." })
    } else {
      User.tryLoginUser(username, password)
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(error => {
        return res.status(500).json({ message: "Incorrect username or password."})
      })
    }
  }

}

module.exports = UsersController
