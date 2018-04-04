'use strict'
let path = require('path')
require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: `postgres://localhost/${process.env.memory-hole}`,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/memory-hole',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_NAME,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }

};
