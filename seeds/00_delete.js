
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('movies').del()
        .then(() => knex('movies').del())
}
