const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Definition = require('./models/definitions');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});


app.set('view engine','ejs');

app.get('/', async function(request, response){

  try {
    // Promise resolved
    const definitions = await Definition.find({term: 'Friday'});
    response.render('index',{definitions: definitions});
  
  } catch(err) {
    // Promise rejected
    return response.status(500).send(err);
  }

})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(request,response, next){
  response.status(404);
  response.send('404: File Not Found');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
