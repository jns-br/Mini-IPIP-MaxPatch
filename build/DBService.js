const mongoose = require('mongoose');
const DB_URL = process.env.DBCONNECTION;

const Result = require('./ResultModel');

class DBService {
  async init() {
    try {
      await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });

      mongoose.set('autoindex', true);

      Result.init();
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
}

module.exports = new DBService();
