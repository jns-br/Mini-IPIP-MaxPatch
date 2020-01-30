const Result = require('./ResultModel');

class ResultRepo {
  async saveResult(result){
    try {
      const entry = Result(result);
      await entry.save();
    } catch (err) {
      console.error('DB Error:', err.message)
      throw err;
    }
  }
}

module.exports = new ResultRepo();
