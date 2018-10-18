
exports.up = function(knex, Promise) {
  return knex.schema.createTable('directors', (table) => {
    table.increments('id')
    table.string('name').notNullable()
    table.timestamp('reported_at').notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('directors')
};
