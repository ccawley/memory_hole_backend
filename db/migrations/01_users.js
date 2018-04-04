exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('user_name').notNullable().defaultTo('')
    table.string('first_name').notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
