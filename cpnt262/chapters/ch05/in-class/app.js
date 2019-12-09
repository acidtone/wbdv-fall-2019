const express = require('express');
const path = require('path');
const pageInfo = require('./pageInfo');
const definitions = require('./definitions');

// console.log(typeof definitions);

const app = express();

app.set('view engine','ejs'); // allows us to exclude the file extension

const requestTime = function (request, response, next) {
  response.locals.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/:page', function(request, response){
  if (request.params.page === 'definitions') {
    pageInfo.definitions.definitions = definitions;
  }
  response.render(request.params.page,pageInfo[request.params.page]);
})

app.get('/', function(request, response){
  response.render('index',pageInfo.index);
})

app.use(express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
