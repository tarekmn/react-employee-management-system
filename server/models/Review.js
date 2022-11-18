const { Schema, model, Types } = require("mongoose");

const ReviewSchema = new Schema({

  employee: {
    type: Types.ObjectId,
    ref: "Employee",
  },
  author: {
    type: Types.ObjectId,
    ref: "Employee",
  },
  report: {
    type: String,
  },
  score: {
    type: Number,
  }
},
  {
    timestamps: true
  });

const Review = model("Review", ReviewSchema);
module.exports = Review;