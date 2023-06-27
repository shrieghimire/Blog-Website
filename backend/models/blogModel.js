const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      require: [true, "author is required"],
    },
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is require"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
