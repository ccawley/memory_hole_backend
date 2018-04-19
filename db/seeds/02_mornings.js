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
          gratitude_1: 'My cat with the moustache.',
          gratitude_2: 'My amazing fiance Stefan, also with the moustache.',
          gratitude_3: 'Daily showers.',
          daily_goal: 'Get totally prepared for capstone presentation.',
          goal_microtarget_1: 'Make demo video for MemoryHole.',
          goal_microtarget_2: 'Work on some final styling changes to the app.',
          goal_microtarget_3: 'Practice my presentation at least three times.',
          // selfie_url: 'https://lh3.googleusercontent.com/-1s11c-YdLtc/VWdF8ypoweI/AAAAAAAAcXY/9jVu8DOBhvg/s640/blogger-image-2118592173.jpg',
          had_breakfast: true,
          did_exercise: false,
          inspirational_quote: '"The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself."',
          quote_author: 'Henry Miller'
        }
        // {
        //   id: 2,
        //   user_id: 2,
        //   // date: '4/3/18',
        //   did_make_bed: false,
        //   // meditation_activity: 'Hot yoga',
        //   gratitude_1: 'Lorem ipsum dolor sit amet.',
        //   gratitude_2: 'Tempor incididunt ut labore.',
        //   gratitude_3: 'Lorem ipsum dolor sit amet.',
        //   daily_goal: 'Consectetur adipisicing elit.',
        //   goal_microtarget_1: 'Officia deserunt mollit anim id est laborum.',
        //   goal_microtarget_2: 'Incididunt ut labore et dolore magna aliqua.',
        //   goal_microtarget_3: 'Nisi ut aliquip ex ea commodo consequat.',
        //   // selfie_url: 'https://lh3.googleusercontent.com/-1s11c-YdLtc/VWdF8ypoweI/AAAAAAAAcXY/9jVu8DOBhvg/s640/blogger-image-2118592173.jpg',
        //   had_breakfast: true,
        //   did_exercise: false,
        //   inspirational_quote: '"Theres never enough time to do all the nothing you want."',
        //   quote_author: 'Calvin & Hobbes'
        // }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('mornings_id_seq', (SELECT MAX(id) FROM mornings));`
      );
    });
};
