const express = require('express');
const path = require('path');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine','ejs'); // allows us to exclude the file extension

// See Chapter 05
// Define timestamp middleware
// ref: https://expressjs.com/en/api.html#app.use
// ref: https://expressjs.com/en/guide/writing-middleware.html

const requestTime = function (request, response, next) {
  // Pass the current time to the view engine
  // ref: https://expressjs.com/en/api.html#res.locals
  response.locals.requestTime = Date.now()
  next()
}

// Set it as a callback to fire before all endpoint handlers are invoked
app.use(requestTime)

/* See Chapter 04*/
// Set up our view endpoints
app.get('/:page', function(request, response){
  console.log(response.locals);
  response.render(request.params.page,pageInfo[request.params.page]);
})

app.get('/', function(request, response){
  response.render('index',pageInfo.index);
})

// See Chapter 03(?)
// Serve static assets
app.use(express.static(path.join(__dirname, 'assets')));

// Catch our 404s
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
