exports.up = function(knex, Promise) {
  return knex.schema.createTable('evenings', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('date').notNullable().defaultTo('')
    table.text('journal_entry').notNullable().defaultTo('')
    table.string('pic_of_the_day_url').notNullable().defaultTo('')
    table.text('lessons_learned').notNullable().defaultTo('')
    table.text('wins_brags').notNullable().defaultTo('')
    table.string('gratitude_4').notNullable().defaultTo('')
    table.string('gratitude_5').notNullable().defaultTo('')
    table.string('gratitude_6').notNullable().defaultTo('')
    // table.text('historical_fact').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('evenings')
};
