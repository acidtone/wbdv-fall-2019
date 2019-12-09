const mongoose = require('mongoose');

const definitionSchema = new mongoose.Schema(
  {
    term: {
      type: String,
      require: true
    },
    definition: {
      type: String,
      require: true
    }
  }
);

const Definition = mongoose.model('Definition', definitionSchema);

module.exports = Definition;