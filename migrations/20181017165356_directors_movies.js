
exports.up = function(knex, Promise) {
  return knex.schema.createTable('directors_movies', (table) => {
    table.integer('director_id').notNullable()
    table.foreign('director_id').references('directors.id')
    table.integer('movie_id').notNullable()
    table.foreign('movie_id').references('movies.id')
    table.timestamp('reported_at').notNullable().defaultTo(knex.fn.now())

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('directors_movies')
};
