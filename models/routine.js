const db = require('../knex.js')
const knex = require('../knex')
const axios = require('axios')

class Mornings {
  constructor() {}
  // Enter morning data into morning table...
  static newMorning(morningData) {
    return knex('mornings')
      .insert(morningData)
      // .returning('*')
  }

}

module.exports = Mornings
