const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema({

},
{
  timestamps: true
});

const Review = model("Review", ReviewSchema);
module.exports = Review;