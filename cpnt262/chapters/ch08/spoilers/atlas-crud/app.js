const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const definitions = require('./definitions');

const uri = process.env.DB_CONNECTION;
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   // perform actions on the collection object

   const db = client.db("glossary");

/***************/
/* insertOne() */
/***************/

   // const usersCol = db.collection('coolNerds');
   // usersCol.insertOne({name: 'Jenn'}, function(err, result) {
   //    console.log(result.insertedCount);
   // });

/***************/
/* insertMany() */
/***************/

   // db.collection('definitions').insertMany(definitions, function(err, result) {
   //    console.log(result.insertedCount);
   // });

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

/***************/
/* FindOne() */
/***************/

   client.close();
});
