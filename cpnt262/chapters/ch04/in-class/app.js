const express = require('express');
const path = require('path');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine','ejs'); // allows us to exclude the file extension

app.get('/', function(request, response){
  response.render('index',pageInfo.index);
})

app.get('/:page', function(request, response){
  response.render(request.params.page,pageInfo[request.params.page]);
})

// app.get('/resources', function(request, response){
//   response.render('resources', pageInfo.resources);
// })

// app.get('/definitions', function(request, response){
//   response.render('definitions', pageInfo.definitions);
// })


// Serve static assets
app.use(express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
