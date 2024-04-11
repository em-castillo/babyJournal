const mongoose = require("mongoose");

const sequenceSchema = mongoose.Schema({
  maxMilestoneId: { type: Number, required: true },
  maxMemoryId: { type: Number, required: true },
  maxLinkId: { type: Number, required: true },
});

module.exports = mongoose.model("Sequence", sequenceSchema);