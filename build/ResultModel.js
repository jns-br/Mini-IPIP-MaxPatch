const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
  result: Object
});

module.exports = mongoose.model('Result', resultSchema);

