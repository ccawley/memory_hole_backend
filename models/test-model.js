/*const db = require('../db/knex.js')
const knex = require('../db/knex')
const axios = require('axios')
let data = {
  hello: 'hello world'
}

class Test {
  constructor() {}

  static message() {
    return data.hello;
  }
}

module.exports = Test*/

// class User {
//   constructor() {}
//
//   static index() {
//     return knex('users')
//   }
//
//   static pullProfile({token}) {
//     return axios.get(`https://api.github.com/user`, {headers: { Authorization: `token ${token}` } })
//       .then(result => {
//         return {
//           full_name: result.data.name,
//           user_name: result.data.login,
//           avatar_image: result.data.avatar_url
//         }
//       })
//       .catch(err => console.log(err, "YOU'VE GOT ERR, BRO!!!!"))
//   }
//
//   static getUser(username) {
//     return knex('users')
//       .where({ user_name: username})
//       .first()
//       .then(match => match)
//   }
//
//   static createUser(newUser) {
//     return knex('users')
//       .insert(newUser)
//       .then(() => {
//         return knex('users')
//           .where({user_name: newUser.user_name})
//           .first()
//           .then(result => result)
//       })
//   }
//
// }
//
// module.exports = User
