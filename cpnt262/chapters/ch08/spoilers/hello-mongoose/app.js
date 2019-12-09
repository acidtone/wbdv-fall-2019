const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });

console.log(process.env.DB_CONNECTION);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');

  const definitionSchema = new mongoose.Schema({
    term: String,
    definition: String
  });

  const Definition = mongoose.model('Definition', definitionSchema);

  // const friday = new Definition({ term: 'friday', definition: 'is awesome' });
  // console.log(`${friday.term} ${friday.definition}`);

  // definitionSchema.methods.renderHTML = function () {
  //   const html = `<dt>${this.term}</dt><dd>${this.definition}</dd>`;
  //   console.log(html);
  // }

  // friday.save(function (err, friday) {
  //   if (err) return console.error(err);
  //   console.log('Document added to DB');
  // });

  // Definition.find(function (err, terms) {
  //   if (err) return console.error(err);
  //   console.log(terms);
  // })

  // Definition.find({ term: /^fri/ }, function (err, terms) {
  //   if (err) return console.error(err);
  //   console.log(`findOne: ${terms}`);
  // });

  // Activity: create another model for monday (totally sucks)

});

