const Mongoose = require("mongoose")
const Review = require("../models/Review")
const connection = require("../config/connection")


const seedReview = [



  {
    _id: new Mongoose.Types.ObjectId("6377bd55a630d379a93d6530"),
    employee: new Mongoose.Types.ObjectId("63779800608be5189d3c6429"),
    author: new Mongoose.Types.ObjectId("63779ffc346e943464682d7e"),
    report: "this is a review",
    score: 95,
  },

  {
    _id: new Mongoose.Types.ObjectId("6377ca625a800a242c6482c3"),
    employee: new Mongoose.Types.ObjectId("6377ca3096fb999b5ca5e36f"),
    author: new Mongoose.Types.ObjectId("63779fa141a7ae104b5f07d3"),
    report: "this is Tarek's review",
    score: 25,
  },

]



const seed = async () => {
  const queryFirst = await Review.remove({})
  console.log("seeding review...")
  const seed = await Promise.all(seedReview.map(async (rev) => await Review.create(rev)))
  console.log("seeding done")
  process.exit()
}


seed();