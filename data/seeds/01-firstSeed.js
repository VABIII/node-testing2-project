
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Tony Stark'},
        {id: 2, name: 'James Howlette'},
        {id: 3, name: 'Remy LeBeau'}
      ]);
    });
};
