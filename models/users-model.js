const db = require('../knex.js');
const knex = require('../knex');
const axios = require('axios');
const bcrypt = require('bcryptjs');

class User {
  constructor() {}

  static createUser(user_name, first_name, password) {
    return knex('users')
      .insert({user_name, first_name, password})
      .returning('*')
      .then(([result]) => {
        return result
      });
  }

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
