exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'busey',
          first_name: "Gary",
          avatar_image_url: 'http://www.azquotes.com/public/pictures/authors/e9/44/e9442df886a00719f3d8d2f51894fcf1/52b9561984d40.jpg',
          password: "endocrineRip",
          email: "cawley_21@hotmail.com"
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    });
};