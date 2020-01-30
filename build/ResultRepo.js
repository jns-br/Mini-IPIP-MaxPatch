const Result = require('./ResultModel')

class ResultRepo {
  async saveResult (result) {
    try {
      const alpha77 = this.getAlpha77(result);
      const alpha70 = this.getAlpha70(result);
      const alpha69 = this.getAlpha69(result);
      const alpha68 = this.getAlpha68(result);
      const alpha65 = this.getAlpha65(result);

      const entry = Result({alpha77, alpha70, alpha69, alpha68, alpha65});
      await entry.save();
    } catch (err) {
      console.error('DB Error:', err.message)
      throw err
    }
  }

  getAlpha77 (result) {
    const {lifeOfParty, talkAtParties, dontTalk, keepInBackground} = result
    return {
      lifeOfParty,
      talkAtParties,
      dontTalk,
      keepInBackground
    }
  }

  getAlpha70 (result) {
    const {sympathize, othersEmos, interestInOthers, othersProblems} = result;
    return {
      sympathize,
      othersEmos,
      interestInOthers,
      othersProblems
    }
  }

  getAlpha69 (result) {
    const {chores, order, forgetThings, mess} = result;
    return {
      chores,
      order,
      forgetThings,
      mess
    }
  }

  getAlpha68 (result) {
    const {moodSwings, upset, relaxed, blue} = result;
    return {
      moodSwings,
      upset,
      relaxed,
      blue
    }
  }

  getAlpha65 (result) {
    const {vividImagination, abstractUnderstanding, abstractInterest, noImagination} = result;
    return {
      vividImagination,
      abstractUnderstanding,
      abstractInterest,
      noImagination
    }
  }
}

module.exports = new ResultRepo()
