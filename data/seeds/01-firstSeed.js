
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Tony Stark', codeName: 'Iron Man'},
        {id: 2, name: 'James Howlette', codeName: 'Wolverine'},
        {id: 3, name: 'Remy LeBeau', codeName: 'Gambit'}
      ]);
    });
};
