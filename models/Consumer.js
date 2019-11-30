const mongoose = require('mongoose');

const ConsumerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  person: {
    type: Number,
    required: true
  },
  tap: {
    type: Number,
    required: true
  },
  flush: {
    type: Number,
    required: true
  },
  shower: {
    type: Number,
    required: true
  },
  washingMachine: {
    type: Number,
    required: true
  },
  dishWasher: {
    type: Number,
    required: true
  },
  filter: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Consumer = mongoose.model('consumers', ConsumerSchema);
