'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', function(table) {
    table.increments();
    table.varchar('title', 'char(255)').notNullable();
    table.varchar('description', 'char(255)').notNullable();
    table.decimal('price').notNullable();
    table.varchar('item_image', 'char(255)').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('classifieds');
};
