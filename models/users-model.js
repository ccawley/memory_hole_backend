const knex = require('../knex');
const axios = require('axios');
const bcrypt = require('bcryptjs');

class User {
  constructor() {}

  // Register a new user and hash their password.
  static createUser(user_name, first_name, password) {
    let hashedPassword = bcrypt.hashSync(password, 10);
    return knex('users')
      .insert({user_name, first_name, password: hashedPassword})
      .returning('*')
      .then(([result]) => {
        return result
      });
  }

  // Check db to see if username is already taken during registration.
  static checkUser(user_name) {
    return knex('users')
    .where({user_name})
    .first()
    .then(queryResult => {
      if (queryResult) {
        delete queryResult.password
        return queryResult
      }
      return queryResult
    })
  }

  // Validate and log a user in.
  static tryLoginUser(user_name, password) {
    return knex('users')
      .select('*')
      .first()
      .where({user_name})
      .then(queryResult => {
        if (!queryResult) return 'User does not exist.'
        if (bcrypt.compareSync(password, queryResult.password)) {
          delete queryResult.password
          return queryResult
        } else {
          return false
        }
      });
  }

}

module.exports = User
