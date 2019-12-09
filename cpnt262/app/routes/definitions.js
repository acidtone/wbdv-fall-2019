const express = require("express");
const defRoutes = express.Router();
const Definition = require('../models/definitions.js');

defRoutes.get('/', async function(request, response) {
  console.log('get /');
  try {

    const definitions = await Definition.find({});
    response.render('definitions',{definitions: definitions});

  } catch (err) {
    return res.status(500).send(err);
  }
})

defRoutes.get('/new', async function(request, response) {
  console.log('get new');
  response.render('definitions-form',{});
})

defRoutes.post("/", function(request, response) {
  const definition = new Definition(request.body);
  console.log('post /');
  // error = definition.validateSync();
  // console.log();

  definition.save(err => {
      if (err) throw err;
      response.redirect("/");
    });
  });

module.exports = defRoutes;