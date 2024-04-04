const mongoose = require("mongoose");

const milestoneSchema = mongoose.Schema({
  id: { type: String, required: true },
  activity: { type: String, required: true },
  age: { type: String, required: true },
});

module.exports = mongoose.model("Milestones", milestoneSchema);