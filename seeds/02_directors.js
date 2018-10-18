
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directors').del()
    .then(function () {
      // Inserts seed entries
      return knex('directors').insert([
        {
          id: 1,
          name: 'Andrew Stanton'
        },
        {
          id: 2,
          name: 'Jason Moore'
        },
        {
          id: 3,
          name: 'Mark Waters'
        },
        {
          id: 4,
          name: 'Jay Chandrasekhar'
        },
        {
          id: 5,
          name: 'Dan Scanlon'
        }
      ]);
    });
};
