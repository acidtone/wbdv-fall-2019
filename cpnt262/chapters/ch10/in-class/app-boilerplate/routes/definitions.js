const express = require('express');
const defRouter = express.Router();
const Definition = require('../models/definitions.js');

defRouter.get('/', async function(request, response) {
  try {
    const definitions = await Definition.find({});
    response.render('definitions',{definitions: definitions})
  } catch (err) {
    return response.status(500).send(err);
  }
});

defRouter.get('/new', function(request, response){
  response.render('definitions-form',{});
});

defRouter.post('/', function(request, response){
  
  const definition = new Definition(request.body);

  definition.save(function(err){
    if (err) throw err;
    response.redirect('/definitions/new');
  });

});

module.exports = defRouter;