
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id')
    table.string('title')
    table.string('director')
    table.integer('year')
    table.integer('rating')
    table.string('poster_url')
    table.timestamp('reported_at').notNullable().defaultTo(knex.fn.now())

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
