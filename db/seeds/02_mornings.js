exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mornings').del()
    .then(function () {
      // Inserts seed entries
      return knex('mornings').insert([
        {
          id: 1,
          user_id: 1,
          // date: '4/3/18',
          did_make_bed: true,
          // meditation_activity: 'Hot yoga',
          gratitude_1: 'Lorem ipsum dolor sit amet.',
          gratitude_2: 'Tempor incididunt ut labore.',
          gratitude_3: 'Lorem ipsum dolor sit amet.',
          daily_goal: 'Consectetur adipisicing elit.',
          goal_microtarget_1: 'Officia deserunt mollit anim id est laborum.',
          goal_microtarget_2: 'Incididunt ut labore et dolore magna aliqua.',
          goal_microtarget_3: 'Nisi ut aliquip ex ea commodo consequat.',
          // selfie_url: 'https://lh3.googleusercontent.com/-1s11c-YdLtc/VWdF8ypoweI/AAAAAAAAcXY/9jVu8DOBhvg/s640/blogger-image-2118592173.jpg',
          had_breakfast: true,
          did_exercise: true,
          inspirational_quote: '"If you put that straight jacket on me, I am going to pull your endocrine system out of your body." ~ Gary Busey'
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('mornings_id_seq', (SELECT MAX(id) FROM mornings));`
      );
    });
};
