const express = require('express');
const menuInfo = require('./menuInfo');

app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index', {menu: menuInfo});
})

app.get('/:page', function(request, response){
  response.render(request.params.page, {menu: menuInfo});
})

app.listen(3000);