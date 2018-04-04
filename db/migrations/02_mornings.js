exports.up = function(knex, Promise) {
  return knex.schema.createTable('mornings', (table) => {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('date').notNullable().defaultTo('')
    table.boolean('did_make_bed').notNullable().defaultTo('f')
    table.string('meditation_activity').notNullable().defaultTo('')
    table.string('gratitude_1').notNullable().defaultTo('')
    table.string('gratitude_2').notNullable().defaultTo('')
    table.string('gratitude_3').notNullable().defaultTo('')
    table.string('daily_goal').notNullable().defaultTo('')
    table.string('goal_microtarget_1').notNullable().defaultTo('')
    table.string('goal_microtarget_2').notNullable().defaultTo('')
    table.string('goal_microtarget_3').notNullable().defaultTo('')
    // table.string('selfie_url').notNullable().defaultTo('')
    table.boolean('did_have_breakfast').notNullable().defaultTo('f')
    table.boolean('did_exercise').notNullable().defaultTo('f')
    table.text('inspirational_quote').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mornings')
};
