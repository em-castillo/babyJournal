const mongoose = require('mongoose');

const memorySchema = mongoose.Schema({
   id: { type: String, required: true },
   title: { type: String },
   text: { type: String, required: true },
});

module.exports = mongoose.model('Memories', memorySchema);