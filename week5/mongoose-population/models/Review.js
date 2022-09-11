const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book" },
  reviewText: String,
  critic: { type: Schema.Types.ObjectId, ref: "Critic" },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
