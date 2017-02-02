'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifieds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classifieds').insert(
          {
            id: 1,
            title: 'NES Classic',
            description: 'I got lucky and found it, and decided to charge 10x what it was worth.',
            price:600,
            item_image:'http://www.nintendo.com/images/page/nes-classic/nes-classic-edition-box.png',
            created_at: '2016-06-26T14:26:16.000Z',
            updated_at: '2016-06-26T14:26:16.000Z'
          }),
        knex('classifieds').insert(
          {
            id: 2,
            title:'Pikachu 9" Plush Stuffed Toy',
            description:'Polyester fiber construction Officially licensed.',
            price:10,
            item_image:'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg',
            created_at: '2016-06-26T14:26:16.000Z',
            updated_at: '2016-06-26T14:26:16.000Z'
          })

      ]);
    }).then(function(){
      return knex.raw("SELECT SETVAL('classifieds_id_seq', (SELECT MAX(id) FROM CLASSIFIEDS));"
    ); //This line
  });
};

//Line 26, makes sure that nothing is in database to begin with in order to avoid primary key id conflicts. You query the database using knex, and then get rid of everything, in order to properly seed.

//Line 26, you can tell this is a promise because it's 'thenable'. Return Promise.all says, you have all these different async requests (all the inserts for different columns are there own promises). You fire off all the promises simulataneously, so the promise.all only resolves once they ALL resolve. If any of them should fail, the promise.all will break.

//timestamps, new DATE, is this an object constructor? TODO: look up new Date.
