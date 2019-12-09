// The connect code from this article
// ref: https://codeforgeek.com/mongodb-atlas-node-js/

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = DB_CONNECTION
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

// The connect code from Atlas
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://hagrid:aragogrip@cluster0-1c2nl.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
