const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected!!!');
  const definitionSchema = new mongoose.Schema(
    {
      // term: String,
      // definition: String
      term: {
        type: String,
        required: true
      },
      definition: {
        type: String,
        required: true
      }
    }
  );

  definitionSchema.methods.renderHTML = function () {
    const html = 
    `<dt>${this.term}</dt>
    <dd>${this.definition}</dd>`;
    console.log(html);
    return 'this is my return!';
  }
  const Definition = mongoose.model('Definition', definitionSchema);

  const friday = new Definition(
    { 
      term: 'Friday',
      definition: 'is awesome!'
    });
  
  // console.log(`${friday.term} ${friday.definition}`);
  // console.log(friday.renderHTML());

  friday.save(function (err, friday) {
    if (err) return console.error(err);
    console.log('document added to collection');
  });

  // Use this model to create a Monday (totally sucks) document

});


