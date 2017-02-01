// Update with your config settings.
'use strict';
module.exports = {

  development: {
    client: 'pg', //technology you're using could be sql, sql lite, post-gres etc...
    connection: 'postgres://localhost/classifieds_dev'
   },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_test'
   },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
   },

};

//the production object within the module.exports object, connects to heroku for when you deploy. The heroku version of the database.
//These objects inside objects are essentially 'fed' to knex.js, in order to connect to the proper databases.

//TODO: Need to look up more information about how process.env works...
