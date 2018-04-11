const db = require('../knex.js')
const knex = require('../knex')
const axios = require('axios')

class Morning {
  constructor() {}
  // Enter morning data into morning table...
  static newMorning(morningData) {
    return knex('mornings')
      .insert(morningData)
      // .returning('*')
  }

}

class Evening {
  constructor() {}
  // Enter evening data into evening table...
  static newEvening(eveningData) {
    return knex('evenings')
      .insert(eveningData)
      // .returning('*')
  }

}

module.exports = {
  Morning,
  Evening
}
