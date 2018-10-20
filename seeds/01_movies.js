
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          title: 'Pitch Perfect',
          director:'Jason More',
          year: 2012,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Pitch_Perfect_movie_poster.jpg'
        },
        {
          id: 2,
          title: 'Mean Girls',
          director: 'Mark Waters',
          year: 2004,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Mean_Girls_film_poster.png/220px-Mean_Girls_film_poster.png'
        },
        {
          id: 3,
          title: 'Super Troopers',
          director: 'Jay Chandrasekhar',
          year: 2001,
          rating: 5,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Supertrooper.jpg/220px-Supertrooper.jpg'
        },
        {
          id: 4,
          title: 'Monsters University',
          director: 'Dan Scanlon',
          year: 2013,
          rating: 3,
          poster_url: 'https://m.media-amazon.com/images/M/MV5BMTUyODgwMDU3M15BMl5BanBnXkFtZTcwOTM4MjcxOQ@@._V1_.jpg'
        },
        {
          id: 5,
          title: 'Finding Dory',
          director: 'Andrew Stanton',
          year: 2016,
          rating: 4,
          poster_url: 'http://www.gstatic.com/tv/thumb/v22vodart/12329215/p12329215_v_v8_ab.jpg'
        },

      ])
      .then(() => {
        // After SQL INSERT, update the autoincrementing id counter
        return knex.raw("SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));")
      })
    })
}
