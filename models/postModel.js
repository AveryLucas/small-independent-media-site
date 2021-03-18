const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true },
  lastEdited: { type: Date, default: Date.now, required: true },
  markdown: { type: String, required: true },
  tags: { type: [String], required: false },
});

module.exports = Post = mongoose.model("post", postSchema);
