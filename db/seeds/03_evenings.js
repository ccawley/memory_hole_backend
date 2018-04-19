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
          journal_entry: 'Today was a really great day, I woke up feeling really excited about the possibility of being so close to being done with school! I rode the bus in like usual and took time to listen to a meditation app on the bus. I think this really helped me go into what was a stressful day feeling positive and ground. When I got into Galvanize I grabbed Allie to help me practice on my presentation. She had lots of great advice and this helped me to feel a little bit better about presenting, ugh it is the worst but today taught me that I am actually pretty good at it if I can just relax! So yeah, we presented twice in the main room which was also really helpful and got me feeling confident. Charlie and Gina had lots of helpful feedback and positive things to say too. I grabbed lunch with Danny out at Ramen, he is a really funny guy and Im grateful to know him. Everyone in this cohort is so great, I hope we stay in touch. At the least it would be fun to see where everyone ends up for a job, everyone is so talented. After school I headed to the chiro and he has me feeling so good. After that I swung by La Palma to see Stefan and some coworkers before I headed home to work on my project and cuddle with Peanut!',
          pic_of_the_day_url: 'https://res.cloudinary.com/memoryhole/image/upload/v1524118901/B77042DD-755C-494D-BAC2-7033F19DEBA9.jpg',
          lessons_learned: 'I need to channel my focus and energy better, I didnt always make the most of my time in between presentation practice today to work on my application.',
          wins_brags: 'My second presentation was really great, I felt confident and relaxed.',
          gratitude_4: 'Sunny spring days in Seattle.',
          gratitude_5: 'Having an awesome chiropractor.',
          gratitude_6: 'Having a washer and dryer in unit.',
          // historical_fact: 'On this day in 1762, Gary Buseys great great great grandfather yelled at a potato so hard the potato broke into pieces and fell in a vat of bubbling oil. He had inadvertantly invented joe joes.',
        }
        // {
        //   id: 2,
        //   user_id: 2,
        //   // date: '4/3/18',
        //   journal_entry: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //   pic_of_the_day_url: 'http://home.chpc.utah.edu/~mcuma/images/summer03/arco/borah/borah28.jpg',
        //   lessons_learned: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //   wins_brags: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //   gratitude_4: 'Tempor incididunt ut labore.',
        //   gratitude_5: 'Lorem ipsum dolor sit amet.',
        //   gratitude_6: 'Tempor incididunt ut labore.',
        //   // historical_fact: 'On this day in 1762, Gary Buseys great great great grandfather yelled at a potato so hard the potato broke into pieces and fell in a vat of bubbling oil. He had inadvertantly invented joe joes.',
        // }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('evenings_id_seq', (SELECT MAX(id) FROM evenings));`
      );
    });
};
