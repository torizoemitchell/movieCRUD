
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('directors_movies').del()
        .then(() => knex('movies').del())
        .then(() => knex('directors').del())
}
