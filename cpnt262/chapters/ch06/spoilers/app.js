const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','ejs'); // allows us to exclude the file extension

// This middleware is needed to read http post data
// ref: https://flaviocopes.com/express-post-query-variables/
app.use(express.urlencoded({ extended: false }))

app.get('/', function(request, response){
  response.render('index');
})

app.post('/definition', function(request, response){
  // urlencoded() parses the post body for us and passes it to request.body where we can access the params
  console.log(request.body);
  response.send('Definition added');
})

// Catch our 404s
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
