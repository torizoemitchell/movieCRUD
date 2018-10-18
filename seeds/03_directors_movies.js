
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directors_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('directors_movies').insert([
        {
          movie_id: 1,
          director_id: 2
        },
        {
          movie_id: 2,
          director_id: 3
        },
        {
          movie_id: 3,
          director_id: 4
        },
        {
          movie_id: 4,
          director_id: 5
        },
        {
          movie_id: 5,
          director_id: 1
        },
      ])
    })
}
