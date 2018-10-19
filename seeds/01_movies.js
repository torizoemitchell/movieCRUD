
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          title: 'Pitch Perfect',
          year: 2012,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Pitch_Perfect_movie_poster.jpg'
        },
        {
          id: 2,
          title: 'Mean Girls',
          year: 2004,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Mean_Girls_film_poster.png/220px-Mean_Girls_film_poster.png'
        },
        {
          id: 3,
          title: 'Super Troopers',
          year: 2001,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Supertrooper.jpg/220px-Supertrooper.jpg'
        },
        {
          id: 4,
          title: 'Monsters University',
          year: 2013,
          rating: 3,
          poster_url: 'https://en.wikipedia.org/wiki/Monsters_University#/media/File:Monsters_University_poster_3.jpg'
        },
        {
          id: 5,
          title: 'Finding Dory',
          year: 2016,
          rating: 4,
          poster_url: 'https://en.wikipedia.org/wiki/Finding_Dory#/media/File:Finding_Dory.jpg'
        },

      ])
      .then(() => {
        // After SQL INSERT, update the autoincrementing id counter
        return knex.raw("SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));")
      })
    })
}
