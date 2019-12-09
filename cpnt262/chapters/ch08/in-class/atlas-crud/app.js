const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const definitions = require('./definitions');

const args = process.argv.slice(2);

const flag = args[0];
console.log(flag);

const uri = process.env.DB_CONNECTION;
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object

   const db = client.db("glossary");

   const collection = db.collection('definitions');

/***************/
/* insertOne() */
/***************/
if (flag === 'insertOne') {
   collection.insertOne(
    {
      term: 'syntax parser',
      definition: "A program that reads your code and determines what it does and if it's grammar is valid",
      tags: ['css','js','html']
    },
    function(err, cursor) {
     if (err) {
       console.log('There was a problem');
     }
      console.log(cursor.insertedCount);
    })
}
/***************/
/* insertMany() */
/***************/

else if (flag === 'buildDB') {
  collection.insertMany(definitions, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });
}
/***************/
/* updateOne() */
/***************/



/***************/
/* updateMany() */
/***************/

/***************/
/* deleteOne() */
/***************/

/***************/
/* deleteMany() */
/***************/

/***************/
/* Find() */
/***************/

  client.close();
});
