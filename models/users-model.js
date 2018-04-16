const db = require('../knex.js');
const knex = require('../knex');
const axios = require('axios');
const bcrypt = require('bcryptjs');

class User {
  constructor() {}

  static createUser(userData) {
    return knex('users')
      .insert(userData)
      .returning('*')
      .then(([result]) => {
        return result
      });
  }

  static tryLoginUser(user_name, password) {
    return knex('users')
      .select('*')
      .first()
      .where({user_name})
      .then(queryResult => {
        if (!queryResult) return false
        delete queryResult.password
        return queryResult
        // return bcrypt.compare(password, queryResult.password)
      });
  }

}

module.exports = User
