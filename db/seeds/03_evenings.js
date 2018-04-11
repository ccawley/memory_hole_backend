exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('evenings').del()
    .then(function () {
      // Inserts seed entries
      return knex('evenings').insert([
        {
          id: 1,
          user_id: 1,
          // date: '4/3/18',
          journal_entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          pic_of_the_day_url: 'http://www1.pictures.zimbio.com/fp/Buddy+Holly+Hollywood+Walk+Fame+Ceremony+49Iqa7sJn0ux.jpg',
          lessons_learned: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          wins_brags: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          gratitude_4: 'Tempor incididunt ut labore.',
          gratitude_5: 'Lorem ipsum dolor sit amet.',
          gratitude_6: 'Tempor incididunt ut labore.',
          // historical_fact: 'On this day in 1762, Gary Buseys great great great grandfather yelled at a potato so hard the potato broke into pieces and fell in a vat of bubbling oil. He had inadvertantly invented joe joes.',
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('evenings_id_seq', (SELECT MAX(id) FROM evenings));`
      );
    });
};
