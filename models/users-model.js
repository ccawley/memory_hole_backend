const db = require('../knex.js')
const knex = require('../knex')
const axios = require('axios')

class Users {
  constructor() {}

  static createUser(userData) {
    return knex('users')
      .insert(userData)
      .returning('*')
      .then(([result]) => {
        return result
      })
  }

  static getUser() {
    return knex('users')
    .first();
  }

}

module.exports = Users
