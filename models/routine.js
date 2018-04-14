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
//SELECT * FROM mornings WHERE CAST(created_at as text) LIKE '2018-04-13%' AND user_id=1;
//SELECT * FROM mornings WHERE created_at::text LIKE '2018-04-13%' AND user_id=1;
// THE GRAND FINALE
// SELECT * FROM users INNER JOIN mornings on users.id=mornings.user_id INNER JOIN evenings on users.id=evenings.user_id WHERE mornings.created_at::text LIKE '2018-04-13%' AND mornings.user_id=1 AND evenings.created_at::text LIKE '2018-04-13%' AND evenings.user_id=1;
function getDay(user_id, date) {
  /*return knex('mornings')
    .where('created_at::text', 'like', `%${date}`)*/
  //return knex.raw(`SELECT * FROM mornings WHERE created_at::text LIKE '${date}%' AND user_id=${user_id};`)
  return knex.raw(`SELECT * FROM users INNER JOIN mornings on users.id=mornings.user_id INNER JOIN evenings on users.id=evenings.user_id WHERE mornings.created_at::text LIKE '${date}%' AND mornings.user_id=${user_id} AND evenings.created_at::text LIKE '${date}%' AND evenings.user_id=${user_id};`)
}

module.exports = {
  Morning,
  Evening,
  getDay
}
