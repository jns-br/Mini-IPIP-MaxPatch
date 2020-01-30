const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
  alpha77: {
    lifeOfParty: {type: Number, required: true},
    talkAtParties: {type: Number, required: true},
    dontTalk: {type: Number, required:true},
    keepInBackground: {type: Number, required: true}
  },
  alpha70: {
    sympathize: {type: Number, required: true},
    othersEmos: {type: Number, required: true},
    interestInOthers: {type: Number, required: true},
    othersProblems: {type: Number, required: true}
  },
  alpha69: {
    chores: {type: Number, required: true},
    order: {type: Number, required: true},
    forgetThings: {type: Number, required: true},
    mess: {type: Number, required: true}
  },
  alpha68: {
    moodSwings: {type: Number, required: true},
    upset: {type: Number, required: true},
    relaxed: {type: Number, required: true},
    blue: {type: Number, required: true}
  },
  alpha65: {
    vividImagination: {type: Number, required: true},
    abstractUnderstanding: {type: Number, required: true},
    abstractInterest: {type: Number, required: true},
    noImagination: {type: Number, required: true}
  }
});

module.exports = mongoose.model('Result', resultSchema);

