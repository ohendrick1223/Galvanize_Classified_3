
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

//get all
router.get('/', function(req, res) {
  knex('classifieds')
  .select ('id', 'title', 'description', 'price', 'item_image')
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
});

//get by id
router.get('/:id', function(req, res) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
  .first()
  .where('id', req.params.id)
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
});

//post
router.post('/', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var price = req.body.price;
  var item_image = req.body.item_image;

  knex('classifieds')
    .insert({
      title, description, price, item_image
    }, ['id', 'title', 'description', 'price', 'item_image'])
    .then(function(data) {
      res.send(data[0]);
    })
    .catch(function(err) {
      res.send(err);
    });
});

//patch
router.patch('/:id', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var price = req.body.price;
  var item_image = req.body.item_image;

  knex('classifieds')
  .where('id', req.params.id)
  .update({
    'title': title,
    'description': description,
    'price': price,
    'item_image': item_image
  }, ['id', 'title', 'description', 'price', 'item_image'])
  .then(function(data) {
    var toSend = data[0];
    res.send(toSend);
  })
  .catch(function(err) {
    res.send(err);
  });
});
//Delete
router.delete('/:id', function(req, res) {
  knex('classifieds')
  .where('id', req.params.id)
  .del()
  .returning(['id', 'title', 'description', 'price', 'item_image'])
  .then(function(data) {
    res.send(data[0]);
  });
});


module.exports = router;
