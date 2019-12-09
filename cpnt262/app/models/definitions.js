const mongoose = require('mongoose');

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
const Definition = mongoose.model('Definition', definitionSchema);
module.exports = Definition;