const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
   id: { type: String, required: true },
   name: { type: String, required: true  },
   url: { type: String, required: true },
   content: { type: String},
});

module.exports = mongoose.model('Links', linkSchema);