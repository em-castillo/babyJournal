const mongoose = require('mongoose');

const childSchema = mongoose.Schema({
   id: { type: String, require: true} ,
   title: { type: String, required: true  },
   description: { type: String, required: true  },
});

const memorySchema = mongoose.Schema({
   id: { type: String, required: true },
   title: { type: String, required: true  },
   description: { type: String, required: true },
   children: { type: childSchema }
});

module.exports = mongoose.model('Memories', memorySchema);