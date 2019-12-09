const express = require('express');
const path = require('path');

const app = express();

const users = [
  {
    id: 1,
    name: 'John Wick',
    email: 'the-wick@example.com',
    status: 'inactive'
  },
  {
    id: 2,
    name: 'Mandy Michael',
    email: 'mandy@example.com',
    status: 'active'
  },
  {
    id: 3,
    name: 'Jenn Simmons',
    email: 'jenn.simmons@example.com',
    status: 'active'
  }
];

// API: Gets all users
app.get('/api/users',function(request,response){
  response.json(users);
});

// Gets one user by id
app.get('/api/users/:id', function (request, response){
  response.json(users.filter(function(user) {
    // console.log(typeof user.id + ' ' + typeof parseInt(request.params.id));
    return user.id === parseInt(request.params.id);
  }));
});

// Gets one user by status
app.get('/api/users/status/:status', function (request, response){
  response.json(users.filter(function(user) {
    // console.log(typeof user.id + ' ' + typeof parseInt(request.params.id));
    return user.status === request.params.status;
  }));
});

// Gets one user
app.get('/api/users/email/:email', function (request, response){
  response.json(users.filter(function(user) {
    // console.log(typeof user.id + ' ' + typeof parseInt(request.params.id));
    return user.email === request.params.email;
  }));
});


// app.get('/', (req, res) => {
//   // res.send('Hello world!');
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// app.get('/resources', (req, res) => {
//   // res.send('Hello world!');
//   res.sendFile(path.join(__dirname, 'public/resources.html'));
// });

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
